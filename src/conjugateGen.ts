export class ConjugateGenerator {
  numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  findConjugate(): void {
    this.verifyNumbers();
    console.log(`Collection of positive integers: { ${this.numbers} }`);
    console.log('Bead representation:');
    this.beadPrint(this.numbers);
    console.log('Conjugate bead representation:');
    this.conjugateBeadGen();
    console.log('Conjugate collection of integers:');
    
  }

  private verifyNumbers() {
    this.numbers.forEach((num, i) => {
      if (Math.sign(num) < 0) {
        console.log(`${num} is a negative number. Making positive...`);
        this.numbers[i] = Math.abs(num);
      }
    });
  }

  private beadPrint(numbers: number[]) {
    numbers.forEach((num) => {
      const beadRep = 'o'.repeat(num);
      console.log(beadRep);
    });
  }

  private beadArrayGen(): string[][] {
    const arrayOfArraysOfBeads: string[][] = [];
    for (let i = 0; i < this.numbers.length; i++) {
      arrayOfArraysOfBeads[i] = [];
      for (let j = 0; j < this.numbers[i]; j++) {
        arrayOfArraysOfBeads[i][j] = 'o';
      }
    }
    return arrayOfArraysOfBeads;
  }

  private conjugateBeadGen(): void {
    const arrayOfBeads = this.beadArrayGen();
    const conjugateBeadRepObject: number[] = [];
    for (let column = 0; column < arrayOfBeads[0].length; column++) {
      let count = 0;
      for (let row = 0; row < arrayOfBeads.length; row++) {
        if (arrayOfBeads[row][column] === 'o') {
          count++;
        }
      }
      conjugateBeadRepObject.push(count);
    }
    this.beadPrint(conjugateBeadRepObject);
  }


}
