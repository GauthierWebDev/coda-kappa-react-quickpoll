import { useLocalStorage } from "./useLocalStorage.client";

interface PollDraft {
  question: string;
  options: string[];
}

export function usePollForm() {
  const [draft, setDraft] = useLocalStorage<PollDraft>("poll-draft", {
    question: "",
    options: [],
  });

  const updateQuestion = (question: string) => setDraft({ ...draft, question });
  const reset = () => setDraft({ question: "", options: [] });

  const addOption = () => {
    setDraft({ ...draft, options: [...draft.options, ""] });
  };

  const removeOption = (indexToRemove: number) => {
    setDraft({
      ...draft,
      options: draft.options.filter((_, index) => index !== indexToRemove),
    });
  };

  const updateOption = (optionIndex: number, optionValue: string) => {
    setDraft({
      ...draft,
      options: draft.options.map((option, index) => {
        if (index !== optionIndex) return option;
        return optionValue;
      }),
    });
  };

  const isValid = () => {
    return (
      draft.question.trim().length >= 10 &&
      draft.options.every((option) => option.trim().length >= 2)
    );
  };

  return {
    draft,
    updateOption,
    updateQuestion,
    addOption,
    removeOption,
    reset,
    isValid,
  };
}
