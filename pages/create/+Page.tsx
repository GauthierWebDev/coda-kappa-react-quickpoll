import { usePollForm } from "../../hooks/usePollForm";

export default function CreatePoll() {
  const pollForm = usePollForm();

  return (
    <main>
      <h1>Créer un sondage</h1>

      <form>
        <label htmlFor="question">Question</label>
        <input
          type="text"
          id="question"
          value={pollForm.draft.question}
          onChange={(event) => pollForm.updateQuestion(event.target.value)}
        />

        {pollForm.draft.options.map((option, index) => (
          <div key={`option-${String(index)}`}>
            <label htmlFor={`option-${String(index)}`}>
              Option {index + 1}
            </label>
            <input
              id={`option-${String(index)}`}
              value={option}
              onChange={(event) =>
                pollForm.updateOption(index, event.target.value)
              }
            />
          </div>
        ))}

        <button type="button" onClick={pollForm.addOption}>
          Ajouter une option
        </button>
      </form>
    </main>
  );
}
