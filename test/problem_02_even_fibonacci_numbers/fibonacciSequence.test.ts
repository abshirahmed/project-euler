import FibonacciSequence from '../../src/problem_02_even_fibonacci_numbers/fibonacciSequence';

describe('Fibonacci Sequence', () => {
  describe('Get Fibonacci sequence', () => {
    it('should return a valid Fibonacci sequence when terms is set to 10', () => {
      const terms = 10;
      const sequence = new FibonacciSequence(terms).getSequence();
      const expectedFibonacciSeries = [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n, 89n];

      expect(sequence).toEqual(expectedFibonacciSeries);
    });
  });

  describe('Get sum of Fibonacci sequence', () => {
    it('should return a Fibonacci sequence sum of "232" when terms is to 10', () => {
      const term = 10;
      const fibonacciSequence = new FibonacciSequence(term);
      const expectedSum = '232';

      expect(fibonacciSequence.getSumOfFibonacciSequence().toString()).toEqual(expectedSum);
    });
  });

  describe('Filter even Fibonacci sequence', () => {
    it('should return only even values from a Fibonacci sequence when terms is set to 10', () => {
      const term = 10;
      const fibonacciSequence = new FibonacciSequence(term);
      const expectedFibonacciSeries = [2n, 8n, 34n];

      expect(fibonacciSequence.filterEvenFibonacciSequence()).toEqual(expectedFibonacciSeries);
    });
  });

  describe('Get sum of even Fibonacci sequence', () => {
    it('should return a Fibonacci sequence sum of "44" when terms is to 10', () => {
      const term = 10;
      const fibonacciSequence = new FibonacciSequence(term);
      const expectedSum = '44';

      expect(fibonacciSequence.getSumOfEvenFibonacciSequence().toString()).toEqual(expectedSum);
    });
  });
});
