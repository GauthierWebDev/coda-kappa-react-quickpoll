import { Abort } from "telefunc";
import { pollService } from "@/services/poll.service";
import type { Poll } from "@/types/poll";

export async function onCreate(pollData: Omit<Poll, "id" | "votes">) {
  const errors: string[] = [];
  if (pollData.question.trim().length < 10) {
    errors.push("La question doit faire 10 caractères ou plus.");
  }

  if (pollData.options.every((option) => option.trim().length < 2)) {
    errors.push("Chaque option doit faire 2 caractères ou plus.");
  }

  if (errors.length > 0) {
    throw Abort({ errors });
  }

  return await pollService.createPoll(pollData);
}
