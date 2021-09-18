import { getSumOfAllMultiples } from './getSumOfAllMultiples';

describe('Get Sum of All Multiples', () => {
  it('should return the sum of all multiples of 3 below 10', () => {
    const multiples = [3];
    const limit = 10;
    const expectedSum = 18;

    const sumOfMultiples = getSumOfAllMultiples(multiples, limit);

    expect(sumOfMultiples).toEqual(expectedSum);
  });

  it('should return the sum of all multiples of 3 or 5 below 10', () => {
    const multiples = [3, 5];
    const limit = 10;
    const expectedSum = 23;

    const sumOfMultiples = getSumOfAllMultiples(multiples, limit);

    expect(sumOfMultiples).toEqual(expectedSum);
  });
});
