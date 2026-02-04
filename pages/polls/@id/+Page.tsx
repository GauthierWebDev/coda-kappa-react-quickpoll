import { lazy, Suspense, useState } from "react";
import { useData } from "vike-react/useData";
import type { Data } from "./+data";

const PollResults = lazy(() =>
  import("../../../components/PollResults").then((module) => ({
    default: module.PollResults,
  })),
);

export default function PollDetails() {
  const { poll } = useData<Data>();
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <main>
      <h1>{poll.question}</h1>

      {!hasVoted ? (
        <div className="flex flex-col gap-2">
          {poll.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setHasVoted(true)}
            >
              Voter "{option}"
            </button>
          ))}
        </div>
      ) : (
        <Suspense fallback={<div>Chargement...</div>}>
          <PollResults poll={{ ...poll, id: Number(poll.id) }} />
        </Suspense>
      )}
    </main>
  );
}
