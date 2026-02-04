import { List } from "react-window";
import { VirtualizedPollCard } from "@/components/PollCard";
import { generatePolls } from "@/utils/mockPolls";

export default function Polls() {
  const polls = generatePolls(1000);

  return (
    <main>
      <h1>Catalogue des sondages</h1>

      <div className="h-52">
        <List
          rowComponent={VirtualizedPollCard}
          rowCount={polls.length}
          rowHeight={42}
          rowProps={{ polls }}
        />
      </div>
    </main>
  );
}
