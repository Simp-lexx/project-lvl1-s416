import { randInt } from '../bin/brain-games';
import compare from './c-logic';

const isEven = num => (num % 2 === 0);
const minRandRange = 5;
const maxRandRange = 35;

const brainEven = (name) => {
  const question = randInt(minRandRange, maxRandRange);
  const strQuestion = String(question);
  const myAnswer = isEven(question) ? 'yes' : 'no';
  compare(myAnswer, strQuestion, name, brainEven);
};

export default brainEven;
