import { render } from "vike/abort";
import type { PageContextServer } from "vike/types";
import { useConfig } from "vike-react/useConfig";
import { pollService } from "@/services/poll.service";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(pageContext: PageContextServer) {
  const config = useConfig();

  try {
    const { id } = pageContext.routeParams;
    const poll = await pollService.getPollById(Number(id));

    config({
      title: poll.question,
    });

    return { poll };
  } catch (error) {
    console.trace(error);

    throw render(404, error as Error);
  }
}
