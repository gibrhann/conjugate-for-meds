export class ConjugateGenerator {
  numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  findConjugate(): void {
    this.verifyNumbers();
    console.log(`Collection of positive integers: [${this.numbers}]`);
    console.log('Bead representation:');
    this.beadPrint(this.numbers);
    console.log('Conjugate bead representation:');
    const count = this.conjugateBeadGen();
    this.beadPrint(count);
    console.log('Conjugate collection of integers:');
    console.log(JSON.stringify(count));
  }

  // Loop through the numbers and check for any negatives.
  // Any negative number found gets converted to a positive number.
  private verifyNumbers() {
    this.numbers.forEach((num, i) => {
      if (Math.sign(num) < 0) {
        console.log(`${num} is a negative number. Making positive...`);
        this.numbers[i] = Math.abs(num);
      }
    });
  }

  // Loop through each number and print repeated 'o's.
  // The 'o's correspond to a number in the array.
  private beadPrint(numbers: number[]) {
    numbers.forEach((num) => {
      const beadRep = 'o'.repeat(num);
      console.log(beadRep);
    });
  }

  // This is a helper function to help generate the conjugate bead representation
  // The function generates a 2d array.
  // The inside of the array will hold arrays representing the representation of each number
  // as beads.
  // ie. [ [ 'o', 'o', 'o', 'o', 'o' ], [ 'o', 'o', 'o' ], [ 'o' ] ] for [5,3,1]
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

  // Function finalizes the conjugate bead representation and the formation of the
  // conjugate collection of numbers.
  // The function utilizes the beadArrayGen method and counts the number of beads in each column.
  // Its "flipping" the array original representation and recounting the beads in each row.
  private conjugateBeadGen(): number[] {
    const arrayOfBeads = this.beadArrayGen();
    let countBeads: number;
    let collectionOfInts: number[] = []
    // loop through each column
    for (let column = 0; column < arrayOfBeads[0].length; column++) {
      countBeads = 0;
      // loop through each row
      for (let row = 0; row < arrayOfBeads.length; row++) {
        if (arrayOfBeads[row][column] === 'o') {
          countBeads++;
        }
      }
      collectionOfInts.push(countBeads);
    }
    return collectionOfInts;
  }


}
