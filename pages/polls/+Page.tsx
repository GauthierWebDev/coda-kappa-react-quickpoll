import { List } from "react-window";
import { VirtualizedPollCard } from "@/components/PollCard";
import { useData } from "vike-react/useData";
import type { Data } from "./+data";

export default function Polls() {
  const { polls } = useData<Data>();

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
