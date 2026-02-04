import type { Poll } from "@/types/poll";

const FILE_PATH = "/data/polls.json";

export const pollService = {
  async getPolls(): Promise<Poll[]> {
    const polls = await import(FILE_PATH);
    return polls.default;
  },

  async getPollById(pollId: number): Promise<Poll> {
    const polls = await pollService.getPolls();
    const poll = polls.find((poll) => Number(poll.id) === pollId);
    if (!poll) throw new Error("Poll not found");

    return poll;
  },
};
