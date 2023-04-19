import { ConjugateGenerator } from "./conjugateGen";

async function startProgram() {
    console.log('Starting Program...');
    const numbers = [5,3,1];
    const getConjugate = new ConjugateGenerator(numbers);
    getConjugate.findConjugate();
}

startProgram();