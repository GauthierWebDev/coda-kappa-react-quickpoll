import { usePollForm } from "../../hooks/usePollForm";

export default function CreatePoll() {
  const pollForm = usePollForm();

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const createdPoll = await pollForm.onCreate(pollForm.draft);
    pollForm.reset();

    console.log(createdPoll);
  };

  return (
    <main>
      <h1>Créer un sondage</h1>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Créer le sondage</button>
      </form>
    </main>
  );
}
