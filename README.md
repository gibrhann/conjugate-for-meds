# conjugate-for-meds

conjugate-for meds is a program that generates the conjugate of a collection of positive numbers.

## Installation

```
git clone https://github.com/gibrhann/conjugate-for-meds.git
npm install
```

## Usage

```
In index.ts enter the numbers you wish to conjugate
const numbers = [5,3,1];
const getConjugate = new ConjugateGenerator(numbers);
```
## Running
```
npm run start
```

## Output
```
Starting Program...
Collection of positive integers: [5,3,1]
Bead representation:
ooooo
ooo
o
Conjugate bead representation:
ooo
oo
oo
o
o
Conjugate collection of integers:
[3,2,2,1,1]
```
## Notes

I probably could have used a partition formula to make this easier.
This was fun.
