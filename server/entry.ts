import { telefuncHandler } from "./telefunc-handler";
import { apply, serve } from "@photonjs/express";
import cookieParser from "cookie-parser";
import express from "express";

declare global {
  namespace Vike {
    interface PageContext {
      userId?: string; // ID de l'utilisateur connecté (undefined si non connecté)
      isAuthenticated: boolean; // Booléen comme témoin de connexion (calculé à partir de l'ID)
    }
  }
}

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

export default startApp() as unknown;

function startApp() {
  const app = express();

  app.use(cookieParser());

  apply(app, [
    // Telefunc route. See https://telefunc.com
    telefuncHandler,
  ]);

  return serve(app, {
    port,
  });
}
