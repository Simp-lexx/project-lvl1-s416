import { cons } from 'hexlet-pairs';
import randInt from '../utils';
import gameEngine from '..';

const minRandRange = 1;
const maxRandRange = 100;
const description = 'Find the greatest common divisor of given numbers.';

const gcdFind = (num1, num2) => {
  if (num1 === num2) return num1;
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
  return divider(num1, num2);
};

const brainGcd = () => {
  const firstNum = randInt(minRandRange, maxRandRange);
  const secondNum = randInt(minRandRange, maxRandRange);
  const answer = gcdFind(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;
  return cons(question, String(answer));
};

export default () => gameEngine(description, brainGcd);
