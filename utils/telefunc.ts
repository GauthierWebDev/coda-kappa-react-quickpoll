import type { Request, Response } from "express";
import { getContext as getTelefuncContext } from "telefunc";

export function getContext() {
  return getTelefuncContext<{ express: { req: Request; res: Response } }>();
}
