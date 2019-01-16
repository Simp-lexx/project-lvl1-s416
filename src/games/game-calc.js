import { cons, car, cdr } from 'hexlet-pairs';
import { randInt } from '../bin/brain-games';
import { compare } from './c-logic';

const minRandRange = 5;
const maxRandRange = 35;
const minOperRange = 0;
const maxOperRange = 2;

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

const brainCalc = () => {
  const a = randInt(minRandRange, maxRandRange);
  const b = randInt(minRandRange, maxRandRange);
  const question = cons(a, b);
  const operator = randInt(minOperRange, maxOperRange);
  const signOper = strOper(operator);
  const myAnswer = operResult(question, operator);
  const strQuestion = `${car(question)} ${signOper} ${cdr(question)}`;
  compare(myAnswer, strQuestion, brainCalc);
};

export default brainCalc;
