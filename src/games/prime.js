import { cons } from 'hexlet-pairs';
import randInt from '../utils';
import gameEngine from '..';

const minRandRange = 1;
const maxRandRange = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const question = randInt(minRandRange, maxRandRange);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, String(answer));
};

export default () => gameEngine(description, brainPrime);
