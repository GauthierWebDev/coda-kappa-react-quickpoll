import { pollService } from "@/services/poll.service";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data() {
  const polls = await pollService.getPolls();

  return { polls };
}
