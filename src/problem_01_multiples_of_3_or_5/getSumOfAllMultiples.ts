export const getSumOfAllMultiples = (multiples: number[], limit: number): number => {
  let sumOfAllMultiples = 0;

  for (let i = 1; i < limit; i++) {
    multiples.forEach((multiple) => {
      sumOfAllMultiples += i % multiple === 0 ? i : 0;
    });
  }

  return sumOfAllMultiples;
};
