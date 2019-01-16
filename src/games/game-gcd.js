import { cons, car, cdr } from 'hexlet-pairs';
import { randInt } from '../bin/brain-games';
import compare from './c-logic';

const minRandRange = 1;
const maxRandRange = 100;

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

const brainGcd = (name) => {
  const a = randInt(minRandRange, maxRandRange);
  const b = randInt(minRandRange, maxRandRange);
  const question = cons(a, b);
  const myAnswer = gcdFind(question);
  const strQuestion = `${car(question)} ${cdr(question)}`;
  compare(myAnswer, strQuestion, name, brainGcd);
};

export default brainGcd;
