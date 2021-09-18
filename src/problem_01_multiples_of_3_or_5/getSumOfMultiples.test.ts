import { getSumOfAllMultiples } from './getSumOfAllMultiples';

describe('Get Sum of All Multiples', () => {
  it.each`
    multiples | limit | expectedSum
    ${[3]}    | ${10} | ${18}
    ${[3, 5]} | ${10} | ${23}
  `(
    'should return the sum of all multiples for "$multiples" below the limit "$limit"',
    ({ multiples, limit, expectedSum }) => {
      const sumOfAllMultiples = getSumOfAllMultiples(multiples, limit);

      expect(sumOfAllMultiples).toEqual(expectedSum);
    }
  );
});
