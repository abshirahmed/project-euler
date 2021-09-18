export const getSumOfAllMultiplesOfThreeOrFive = (limit: number): number => {
  let sumOfAllMultiples = 0;

  for (let i = 1; i < limit; i++) {
    sumOfAllMultiples += i % 3 === 0 || i % 5 === 0 ? i : 0;
  }

  return sumOfAllMultiples;
};
