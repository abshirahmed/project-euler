import FibonacciSequence from '../../src/problem_02_even_fibonacci_numbers/fibonacciSequence';

describe('Fibonacci Sequence', () => {
  describe('Get Fibonacci sequence', () => {
    it('should return a valid Fibonacci sequence for values up to 90', () => {
      const expectedFibonacciSeries = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

      const sequence = new FibonacciSequence().getSequence();

      expect(sequence).toEqual(expectedFibonacciSeries);
    });
  });

  describe('Get sum of Fibonacci sequence', () => {
    it('should return the total sum of a Fibonacci sequence for values up to 90', () => {
      const fibonacciSequence = new FibonacciSequence();
      const expectedSum = 232;

      expect(fibonacciSequence.getSumOfFibonacciSequence()).toEqual(expectedSum);
    });
  });

  describe('Filter even Fibonacci sequence', () => {
    it('should only return the even values of a Fibonacci sequence for values up to 90', () => {
      const fibonacciSequence = new FibonacciSequence();
      const expectedFibonacciSeries = [2, 8, 34];

      expect(fibonacciSequence.filterEvenFibonacciSequence()).toEqual(expectedFibonacciSeries);
    });
  });

  describe('Get sum of even Fibonacci sequence', () => {
    it('should return the total sum of a Fibonacci sequence for all even values up to 4,000,000', () => {
      const fibonacciSequence = new FibonacciSequence(4000000);
      const expectedSum = 4613732;

      expect(fibonacciSequence.getSumOfEvenFibonacciSequence()).toEqual(expectedSum);
    });
  });
});
