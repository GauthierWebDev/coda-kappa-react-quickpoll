export interface Poll {
  id: number;
  question: string;
  options: string[];
  votes: PollVote[];
}

export interface PollVote {
  text: string;
  votes: number;
}
