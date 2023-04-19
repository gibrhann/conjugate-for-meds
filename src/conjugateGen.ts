export class ConjugateGenerator {
  numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  findConjugate(): void {
    this.verifyNumbers();
    console.log(`Collection of positive integers: {${this.numbers}}`);
  }

  private verifyNumbers() {
    this.numbers.forEach((num, i) => {
      if (Math.sign(num) < 0) {
        console.log(`${num} is a negative number. Making positive...`);
        this.numbers[i] = Math.abs(num);
      }
    })
  }


}
