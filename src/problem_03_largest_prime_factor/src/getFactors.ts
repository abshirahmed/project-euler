export const getFactors = (value: number): number[] => {
  const factors = [];
  let temp = value,
    factor = 2;

  while (temp != 1) {
    if (temp % factor === 0) {
      factors.push(factor);
      temp /= factor;
    } else {
      factor++;
    }
  }

  return factors;
};
