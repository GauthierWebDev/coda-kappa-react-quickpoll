import type { Poll } from "@/generated/prisma/client";
import { getPrisma } from "@/utils/getPrisma";

export const pollService = {
  async getPolls(): Promise<Poll[]> {
    const prisma = getPrisma();
    const polls = await prisma.poll.findMany();
    prisma.$disconnect();

    return polls;
  },

  async getPollById(pollId: string) {
    const prisma = getPrisma();
    const poll = await prisma.poll.findUnique({
      where: { id: pollId },
      select: {
        question: true,
        author: { select: { name: true } },
        options: {
          select: {
            label: true,
            _count: { select: { userVoteOptions: true } },
          },
        },
      },
    });
    prisma.$disconnect();

    if (!poll) throw new Error("Poll not found");

    return poll;
  },

  async createPoll(
    pollData: Omit<Poll, "id" | "createdAt" | "updatedAt"> & {
      options: string[];
    },
  ) {
    const prisma = getPrisma();
    const newPoll = await prisma.poll.create({
      data: {
        question: pollData.question,
        authorId: pollData.authorId,

        options: {
          create: pollData.options.map((option) => ({
            label: option,
          })),
        },
      },
    });
    prisma.$disconnect();

    return newPoll;
  },
};
