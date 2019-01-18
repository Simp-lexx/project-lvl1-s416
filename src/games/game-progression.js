import { cons, car, cdr } from 'hexlet-pairs';
import { randInt } from '..';
import gameEngine from '../game-engine';

const minRandRange = 5;
const maxRandRange = 35;
const minOperRange = 0;
const maxOperRange = 2;
// const stepProgression = 2;
const description = 'What number is missing in the progression?\n';

const operResult = (pair, operator) => {
  const a = car(pair);
  const b = cdr(pair);
  let result = 0;
  if (operator === 0) {
    result = a + b;
  } else if (operator === 1) {
    result = a - b;
  } else result = a * b;
  return result;
};

const strOper = (operator) => {
  let sign = '';
  if (operator === 0) {
    sign = '+';
  } else if (operator === 1) {
    sign = '-';
  } else sign = '*';
  return sign;
};

const brainProgression = () => {
  const a = randInt(minRandRange, maxRandRange);
  const b = randInt(minRandRange, maxRandRange);
  const progrQuestion = cons(a, b);
  const operator = randInt(minOperRange, maxOperRange);
  const signOper = strOper(operator);
  const answer = operResult(progrQuestion, operator);
  const question = `${car(progrQuestion)} ${signOper} ${cdr(progrQuestion)}`;
  return cons(question, answer);
};

export default () => gameEngine(description, brainProgression);
