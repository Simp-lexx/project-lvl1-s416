import { cons } from 'hexlet-pairs';
import randInt from '../utils';
import gameEngine from '..';

const minProgrStart = 1;
const maxProgrStart = 100;
const minProgrStep = 0;
const maxProgrStep = 10;
const progressionLength = 10;
const minProgrIndex = 0;
const maxProgrIndex = 9;

const description = 'What number is missing in the progression?';

const brainProgression = () => {
  const hiddenIndex = randInt(minProgrIndex, maxProgrIndex);
  const progressionArray = [];
  const startProgression = randInt(minProgrStart, maxProgrStart);
  const stepProgression = randInt(minProgrStep, maxProgrStep);
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray[i] = startProgression + stepProgression * i;
  }
  const answer = progressionArray[hiddenIndex];
  progressionArray[hiddenIndex] = '..';
  const question = progressionArray.join(' ');
  return cons(question, answer);
};

export default () => gameEngine(description, brainProgression);
