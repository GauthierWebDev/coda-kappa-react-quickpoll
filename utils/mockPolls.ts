export const generatePolls = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const optionsCount = Math.floor(Math.random() * 5) + 1;

    return {
      id: i + 1,
      question: `Sondage ${i + 1} : Intitulé du sondage`,
      options: Array.from(
        { length: optionsCount },
        (_, j) => `Option ${j + 1}`,
      ),
      votes: Array.from({ length: optionsCount }, (_, j) => ({
        text: `Option ${j + 1}`,
        votes: Math.floor(Math.random() * 100),
      })),
    };
  });
};
