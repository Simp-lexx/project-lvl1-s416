import { cons } from 'hexlet-pairs';
import { randInt } from '..';
import gameEngine from '../game-engine';

const isEven = num => (num % 2 === 0);
const minRandRange = 5;
const maxRandRange = 35;
const description = 'Answer "yes" if number even otherwise answer "no"\n';

const brainEven = () => {
  const question = randInt(minRandRange, maxRandRange);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => gameEngine(description, brainEven);
