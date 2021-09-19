export default class FibonacciSequence {
  private readonly sequence: bigint[];

  constructor(private terms = 0) {
    this.sequence = this.generateFibonacciSequence(terms);
  }

  getSequence = (): bigint[] => this.sequence;

  generateFibonacciSequence = (terms: number): bigint[] => {
    let x = 0n,
      y = 1n,
      temp = y;

    const fibonacciSequence = [x];

    for (let i = terms; i >= 0; i--) {
      fibonacciSequence.push(y);
      temp = y; // temporarily stores the last value in the previous sequence
      y = y + x; // the last two values are added to create the latest value in the sequence
      x = temp; // the second to last value in the new sequence is set to the last value of the previous sequence ð
    }

    return fibonacciSequence;
  };

  getSumOfFibonacciSequence = (fibonacciSequence = this.sequence): bigint => fibonacciSequence.reduce((x, y) => x + y);

  getSumOfEvenFibonacciSequence = (fibonacciSequence = this.sequence): bigint => {
    const evenFibonacciSequence = this.filterEvenFibonacciSequence(fibonacciSequence);
    return this.getSumOfFibonacciSequence(evenFibonacciSequence);
  };

  filterEvenFibonacciSequence = (fibonacciSequence = this.sequence): bigint[] =>
    fibonacciSequence.filter((x) => x !== 0n && x % 2n === 0n);
}
