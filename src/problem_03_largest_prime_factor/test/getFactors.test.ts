import { getFactors } from '../src/getFactors';

describe('Get factors', () => {
  it('should return all the factors of 13195', () => {
    const expectedPrimeFactors = [5, 7, 13, 29];

    const factors = getFactors(13195);

    expect(factors).toEqual(expectedPrimeFactors);
  });

  it('should return all the factors of 600851475143', () => {
    const expectedPrimeFactors = [71, 839, 1471, 6857];

    const factors = getFactors(600851475143);

    expect(factors).toEqual(expectedPrimeFactors);
    expect(factors.pop()).toEqual(6857);
  });
});
