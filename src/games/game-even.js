import { randInt } from '../bin/brain-games';
import { endGame, compare } from './c-logic';

const isEven = num => (num % 2 === 0);
const minRandRange = 5;
const maxRandRange = 35;

const brainEven = (name, counter) => {
  if (counter === 0) {
    endGame(name);
    return;
  }

  const question = randInt(minRandRange, maxRandRange);
  console.log(`Question: ${question}`);
  const myAnswer = isEven(question) ? 'yes' : 'no';
  compare(myAnswer, name, brainEven(name, counter));
};

export default brainEven;
