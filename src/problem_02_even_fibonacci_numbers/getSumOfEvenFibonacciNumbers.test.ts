describe('Get sum of even Fibonacci numbers', () => {
  it('should return 44 when limit is set to 10', () => {
    const limit = 10;
    const expectedSum = 44;

    const sumOfEvenFibonacciNumbers = getSumOfEvenFibonacciNumbers(limit);

    expect(sumOfEvenFibonacciNumbers).toEqual(expectedSum);
  });
});
