import { useState } from "react";
import polls from "../../data/polls.json";
import { useDebounce } from "../../hooks/useDebounce";

export default function Polls() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const filteredPolls = polls.filter((poll) => {
    return poll.question.toLowerCase().includes(debouncedSearch.toLowerCase());
  });

  return (
    <main>
      <h1>Catalogue des sondages</h1>

      <label htmlFor="search">Rechercher</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <ul>
        {filteredPolls.map((poll) => (
          <li key={poll.id}>{poll.question}</li>
        ))}
      </ul>
    </main>
  );
}
