import { lazy, Suspense, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
const PollResults = lazy(() =>
  import("../../../components/PollResults").then((module) => ({
    default: module.PollResults,
  })),
);
import polls from "../../../data/polls.json";

export default function PollDetails() {
  const pageContext = usePageContext();
  const pollId = pageContext.routeParams.id;
  const poll = polls.find((poll) => Number(poll.id) === Number(pollId));

  const [hasVoted, setHasVoted] = useState(false);

  if (!poll) {
    return <p>Sondage introuvable.</p>;
  }

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
