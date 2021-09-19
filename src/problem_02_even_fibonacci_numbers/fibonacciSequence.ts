export default class FibonacciSequence {
  private readonly sequence: number[];

  constructor(private sequenceLimit = 90) {
    this.sequence = this.generateFibonacciSequence(sequenceLimit);
  }

  getSequence = (): number[] => this.sequence;

  generateFibonacciSequence = (sequenceLimit: number): number[] => {
    let x = 0,
      y = 1,
      temp = y;

    const fibonacciSequence = [x];

    while (y <= sequenceLimit) {
      fibonacciSequence.push(y);
      temp = y; // temporarily stores the last value in the previous sequence
      y = y + x; // the last two values are added to create the latest value in the sequence
      x = temp; // the second to last value in the new sequence is set to the last value of the previous sequence ð
    }

    return fibonacciSequence;
  };

  getSumOfFibonacciSequence = (fibonacciSequence = this.sequence): number => fibonacciSequence.reduce((x, y) => x + y);

  getSumOfEvenFibonacciSequence = (fibonacciSequence = this.sequence): number => {
    const evenFibonacciSequence = this.filterEvenFibonacciSequence(fibonacciSequence);
    return this.getSumOfFibonacciSequence(evenFibonacciSequence);
  };

  filterEvenFibonacciSequence = (fibonacciSequence = this.sequence): number[] =>
    fibonacciSequence.filter((x) => x !== 0 && x % 2 === 0);
}
