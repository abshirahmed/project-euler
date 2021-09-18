import { getSumOfAllMultiplesOfThreeOrFive } from './getSumOfAllMultiplesOfThreeOrFive';

describe('Get Sum of All Multiples of Three or Five', () => {
  it.each`
    limit   | expectedSum
    ${10}   | ${23}
    ${100}  | ${2318}
    ${1000} | ${233168}
  `('should return $expected below the limit "$limit"', ({ limit, expectedSum }) => {
    const sumOfAllMultiples = getSumOfAllMultiplesOfThreeOrFive(limit);

    expect(sumOfAllMultiples).toEqual(expectedSum);
  });
});
