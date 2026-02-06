import { redirect } from "vike/abort";
import type { PageContextServer } from "vike/types";

export async function guard(pageContext: PageContextServer) {
  // ? Si l'utilisateur n'est pas connecté
  if (!pageContext.isAuthenticated) {
    // ! -> Redirection
    throw redirect("/login?reason=create-poll");
  }
  // ? Sinon
  // ! -> Ne rien faire (chargement basique de la page)
}
