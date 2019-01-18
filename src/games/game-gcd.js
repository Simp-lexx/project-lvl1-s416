import { cons, car, cdr } from 'hexlet-pairs';
import { randInt } from '..';
import gameEngine from '../game-engine';

const minRandRange = 1;
const maxRandRange = 100;
const description = 'Find the greatest common divisor of given numbers.\n';

const gcdFind = (pair) => {
  const first = car(pair);
  const second = cdr(pair);
  if (first === second) return first;
  const divider = (a, b) => {
    if (a === 0 || b === 0) return 0;
    const greater = (a > b) ? a : b;
    const lesser = (a < b) ? a : b;
    const mod = greater % lesser;
    if (mod === 0) {
      return lesser;
    }
    return divider(lesser, mod);
  };
  return divider(first, second);
};

const brainGcd = () => {
  const a = randInt(minRandRange, maxRandRange);
  const b = randInt(minRandRange, maxRandRange);
  const pairQuestion = cons(a, b);
  const answer = gcdFind(pairQuestion);
  const question = `${car(pairQuestion)} ${cdr(pairQuestion)}`;
  return cons(question, answer);
};

export default () => gameEngine(description, brainGcd);
