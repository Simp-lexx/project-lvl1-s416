#!/usr/bin/env node
import brainEven from '../games/game-even';
import brainCalc from '../games/game-calc';
import brainGcd from '../games/game-gcd';
import brainProgression from '../games/game-progression';

import { hi } from '..';

console.log('Welcome to the Brain Games!\n');

export const name = hi();

export const randInt = (min, max) => Math.round(Math.random() * (max - min + 1)) + min;

export const startGameEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  brainEven();
};

export const startGameCalc = () => {
  console.log('What is the result of the expression?\n');
  brainCalc();
};

export const startGameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.\n');
  brainGcd();
};

export const startGameProgr = () => {
  console.log('What number is missing in the progression?\n');
  brainProgression();
};
