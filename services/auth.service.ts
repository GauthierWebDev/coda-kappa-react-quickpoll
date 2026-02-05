import argon2 from "argon2";
import * as jose from "jose";
import { getPrisma } from "@/utils/getPrisma";

const secret = jose.base64url.decode(
  "secret_zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02a",
);

export const authService = {
  async login(email: string, password: string) {
    const user = await authService.getUserByEmail(email);
    if (!user) {
      throw new Error("Identifiants invalides");
    }

    if (!(await authService.verifyPassword(user.password, password))) {
      throw new Error("Identifiants invalides");
    }

    return await authService.generateJWT(user.id);
  },

  async generateJWT(userId: string) {
    return new jose.EncryptJWT({ id: userId })
      .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
      .encrypt(secret);
  },

  async getUserByEmail(email: string) {
    const prisma = getPrisma();
    const user = await prisma.user.findUnique({ where: { email } });
    prisma.$disconnect();

    return user;
  },

  async register(name: string, email: string, password: string) {
    const prisma = getPrisma();
    const hashedPassword = await argon2.hash(password);
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    prisma.$disconnect();
  },

  async hashPassword(clearPassword: string) {
    return argon2.hash(clearPassword);
  },

  async verifyPassword(hashedPassword: string, clearPassword: string) {
    return argon2.verify(hashedPassword, clearPassword);
  },
};
