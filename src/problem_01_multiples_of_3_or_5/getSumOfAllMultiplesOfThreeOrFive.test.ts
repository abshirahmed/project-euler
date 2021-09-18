import { getSumOfAllMultiplesOfThreeOrFive } from './getSumOfAllMultiplesOfThreeOrFive';

describe('Get sum of all multiples of three or five', () => {
  it.each`
    limit   | expectedSum
    ${10}   | ${23}
    ${100}  | ${2318}
    ${1000} | ${233168}
  `('should return "$expectedSum" when limit is set to "$limit"', ({ limit, expectedSum }) => {
    const sumOfAllMultiples = getSumOfAllMultiplesOfThreeOrFive(limit);

    expect(sumOfAllMultiples).toEqual(expectedSum);
  });
});
