import { ConjugateGenerator } from "./conjugateGen";

async function startProgram() {
    console.log('Starting Program...');
    const numbers = [2,2];
    const getConjugate = new ConjugateGenerator(numbers);
    getConjugate.findConjugate();
}

startProgram();