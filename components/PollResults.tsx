import type { Poll, PollVote } from "../types/poll";

interface PollResultsProps {
  poll: Poll;
}

export function PollResults({ poll }: PollResultsProps) {
  const totalVotes = poll.votes.reduce((acc, vote) => acc + vote.votes, 0);

  return (
    <section>
      <h3>Résultats du sondage</h3>

      {poll.votes.map((vote) => (
        <PollResultsVote
          key={vote.text}
          pollVote={vote}
          totalVotes={totalVotes}
        />
      ))}
    </section>
  );
}

interface PollResultsVoteProps {
  pollVote: PollVote;
  totalVotes: number;
}

function PollResultsVote({ pollVote, totalVotes }: PollResultsVoteProps) {
  const votePercentage = (pollVote.votes / totalVotes) * 100;

  return (
    <div>
      <span>{pollVote.text}</span>

      <div
        className="bg-blue-500 h-4"
        style={{
          width: `${votePercentage}%`,
        }}
      />

      <span>{votePercentage.toFixed(2)}%</span>
    </div>
  );
}
