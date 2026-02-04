import { render } from "vike/abort";
import type { PageContextServer } from "vike/types";
import { pollService } from "@/services/poll.service";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(pageContext: PageContextServer) {
  try {
    const { id } = pageContext.routeParams;
    const poll = await pollService.getPollById(Number(id));

    return { poll };
  } catch (error) {
    console.trace(error);

    throw render(404, error as Error);
  }
}
