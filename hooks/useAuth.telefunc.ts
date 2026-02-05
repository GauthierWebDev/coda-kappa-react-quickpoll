import { authService } from "@/services/auth.service";
import { Abort } from "telefunc";

export async function onLogin(email: string, password: string) {
  return { success: true, user: { email, password } };
}

export async function onRegister(
  name: string,
  email: string,
  password: string,
) {
  const errors: string[] = [];

  if (name.trim().length < 2) {
    errors.push("Le nom doit faire au moins 2 caractères");
  }

  if (!email.includes("@")) {
    errors.push("Format d'email invalide");
  }

  if (password.trim().length < 12) {
    errors.push("Le mot de passe doit faire au moins 12 caractères");
  }

  if (await authService.getUserByEmail(email)) {
    errors.push("L'adresse email est déjà utilisée");
  }

  if (errors.length > 0) {
    throw Abort({ errorMessage: "Inscription non effectuée", errors });
  }

  await authService.register(name, email, password);

  return { success: true, user: { name, email, password } };
}
