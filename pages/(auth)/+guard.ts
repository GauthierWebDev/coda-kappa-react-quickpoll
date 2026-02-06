import { redirect } from "vike/abort";
import type { PageContextServer } from "vike/types";

export async function guard(pageContext: PageContextServer) {
  // ? Si l'utilisateur est connecté
  if (pageContext.isAuthenticated) {
    // ! -> Redirection
    throw redirect("/");
  }
  // ? Sinon
  // ! -> Ne rien faire (chargement basique de la page)
}
