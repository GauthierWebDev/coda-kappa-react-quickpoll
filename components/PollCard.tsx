import type { RowComponentProps } from "react-window";
import type { Poll } from "../types/poll";

interface PollCardProps extends React.HTMLAttributes<HTMLDivElement> {
  poll: Poll;
}

export function PollCard({ poll, ...rest }: PollCardProps) {
  return (
    <article {...rest} className={`p-2 border border-slate-400 rounded-lg`}>
      <h2>{poll.question}</h2>
    </article>
  );
}

interface VirtualizedPollCardProps {
  polls: Poll[];
}

export function VirtualizedPollCard({
  polls,
  index,
  style,
}: RowComponentProps<VirtualizedPollCardProps>) {
  const poll = polls[index];

  return <PollCard poll={poll} style={style} />;
}
