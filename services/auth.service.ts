import argon2 from "argon2";
import { getPrisma } from "@/utils/getPrisma";

export const authService = {
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
