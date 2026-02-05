import type { PageContextServer } from "vike/types";
import type { Request, Response } from "express";
import { authService } from "@/services/auth.service";

export async function onCreatePageContext(pageContext: PageContextServer) {
  const req = pageContext.runtime.req as Request;

  try {
    if (!req || !req.cookies) return;

    const authToken = req.cookies.auth_token;
    if (!authToken) return;

    const jwtPayload = await authService.verifyJwt(authToken);

    pageContext.userId = jwtPayload.id;
    pageContext.isAuthenticated = Boolean(jwtPayload.id);
  } catch (error) {
    const res = pageContext.runtime.res as Response;
    console.trace(error);

    res.clearCookie("auth_token");
  }
}
