import { cons } from 'hexlet-pairs';
import randInt from '../utils';
import gameEngine from '..';

const minRandRange = 5;
const maxRandRange = 35;
const minOperRange = 0;
const maxOperRange = 2;
const description = 'What is the result of the expression?';

const generateQuestionAnswer = (num1, num2) => {
  const getOperator = randInt(minOperRange, maxOperRange);
  switch (getOperator) {
    case 0: {
      const answer = num1 + num2;
      const question = `${num1} + ${num2}`;
      return cons(question, answer);
    }
    case 1: {
      const answer = num1 - num2;
      const question = `${num1} - ${num2}`;
      return cons(question, answer);
    }
    default: {
      const answer = num1 * num2;
      const question = `${num1} * ${num2}`;
      return cons(question, answer);
    }
  }
};

const brainCalc = () => {
  const getFirstNum = randInt(minRandRange, maxRandRange);
  const getSecondNum = randInt(minRandRange, maxRandRange);
  const getQuestionAnswer = generateQuestionAnswer(getFirstNum, getSecondNum);
  return getQuestionAnswer;
};

export default () => gameEngine(description, brainCalc);
