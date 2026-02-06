import { Abort } from "telefunc";
import { pollService } from "@/services/poll.service";
import type { CreatePollInput } from "@/schemas/poll";
import { CreatePollSchema } from "@/schemas/poll";
import { getContext } from "@/utils/telefunc";
import { ZodError } from "zod";

export async function onCreate(pollData: CreatePollInput) {
  const context = getContext();
  // ...

  try {
    const userId = "Toto";
    if (!userId) throw new Error("Authentification requise");

    const validatedPoll = CreatePollSchema.parse(pollData);
    const createdPoll = await pollService.createPoll(validatedPoll, userId);

    return { success: true, pollId: createdPoll.id };
  } catch (error) {
    if (error instanceof ZodError) {
      throw Abort({ errors: error.issues });
    }

    throw error;
  }
}
