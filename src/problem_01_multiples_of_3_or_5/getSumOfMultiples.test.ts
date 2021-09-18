describe('Get Sum of Multiples', () => {
  it('should return the sum of all multiples of 3 below 10', () => {
    const multiples = [3];
    const limit = 10;
    const expectedSum = 18;

    const sumOfMultiples = getSumOfMultiples(multiples, limit);

    expect(sumOfMultiples).toEqual(expectedSum);
  });
});
