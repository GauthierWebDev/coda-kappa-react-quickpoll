import { useLocalStorage } from "../../hooks/useLocalStorage.client";

interface PollDraft {
  question: string;
  options: string[];
}

export default function CreatePoll() {
  const [draft, setDraft] = useLocalStorage<PollDraft>("poll-draft", {
    question: "",
    options: [],
  });

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDraft({ ...draft, question: event.target.value });
  };

  const handleAddOption = () => {
    setDraft({ ...draft, options: [...draft.options, ""] });
  };

  const handleChangeOption = (
    event: React.ChangeEvent<HTMLInputElement>,
    optionIndex: number,
  ) => {
    setDraft({
      ...draft,
      options: draft.options.map((option, index) => {
        if (index !== optionIndex) return option;
        return event.target.value;
      }),
    });
  };

  return (
    <main>
      <h1>Créer un sondage</h1>

      <form>
        <label htmlFor="question">Question</label>
        <input
          type="text"
          id="question"
          value={draft.question}
          onChange={handleQuestionChange}
        />

        {draft.options.map((option, index) => (
          <div key={`option-${String(index)}`}>
            <label htmlFor={`option-${String(index)}`}>
              Option {index + 1}
            </label>
            <input
              id={`option-${String(index)}`}
              value={option}
              onChange={(event) => handleChangeOption(event, index)}
            />
          </div>
        ))}

        <button type="button" onClick={handleAddOption}>
          Ajouter une option
        </button>
      </form>
    </main>
  );
}
