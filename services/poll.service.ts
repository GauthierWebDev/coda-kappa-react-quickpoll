import type { Poll } from "@/types/poll";
import fs from "node:fs/promises";
import path from "node:path";

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

  async createPoll(pollData: Omit<Poll, "id" | "votes">) {
    const polls = await pollService.getPolls();
    const nextId = Math.max(...polls.map((poll) => Number(poll.id))) + 1;

    const createdPoll: Poll = {
      ...pollData,
      votes: pollData.options.map((option) => ({
        text: option,
        votes: 0,
      })),
      id: nextId,
    };

    await fs.writeFile(
      path.join(path.dirname(".."), FILE_PATH),
      JSON.stringify([...polls, createdPoll]),
    );

    return createdPoll;
  },
};
