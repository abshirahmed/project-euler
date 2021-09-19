describe('Get prime factors', () => {
  it('should return all the factors of 10', () => {
    const target = 10;
    const expectedPrimeFactors = [2, 5];

    const primeFactors = getPrimeFactors(target);

    expect(primeFactors).toEqual(expectedPrimeFactors);
  });
});
