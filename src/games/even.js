import { cons } from 'hexlet-pairs';
import randInt from '../utils';
import gameEngine from '..';

const isEven = num => (num % 2 === 0);
const minRandRange = 5;
const maxRandRange = 35;
const description = 'Answer "yes" if number even otherwise answer "no"';

const brainEven = () => {
  const question = randInt(minRandRange, maxRandRange);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, String(answer));
};

export default () => gameEngine(description, brainEven);
