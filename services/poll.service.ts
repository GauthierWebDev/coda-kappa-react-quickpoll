import type { Poll } from "@/types/poll";

const FILE_PATH = "/data/polls.json";

export const pollService = {
  async getPolls(): Promise<Poll[]> {
    const polls = await import(FILE_PATH);
    return polls.default;
  },
};
