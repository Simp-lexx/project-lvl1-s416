#!/usr/bin/env node
import brainEven from '../games/game-even';
import brainCalc from '../games/game-calc';
import brainGcd from '../games/game-gcd';
import brainProgression from '../games/game-progression';

import { hi } from '..';

const welcome = 'Welcome to the Brain Games!';

// export const name = hi();

export const randInt = (min, max) => Math.round(Math.random() * (max - min + 1)) + min;

export const startGameEven = () => {
  console.log(welcome);
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = hi();
  brainEven(name);
};

export const startGameCalc = () => {
  console.log(welcome);
  console.log('What is the result of the expression?\n');
  const name = hi();
  brainCalc(name);
};

export const startGameGcd = () => {
  console.log(welcome);
  console.log('Find the greatest common divisor of given numbers.\n');
  const name = hi();
  brainGcd(name);
};

export const startGameProgr = () => {
  console.log(welcome);
  console.log('What number is missing in the progression?\n');
  const name = hi();
  brainProgression(name);
};
