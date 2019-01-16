import readlineSync from 'readline-sync';
import { name } from '../bin/brain-games';

let counter = 3;

const resumeGame = fn => fn();

export const endGame = () => {
  console.log(`Congratulations, ${name}!`);
};

export const compare = (myAnswer, question, fn) => {
  if (counter === 0) {
    endGame(name);
    return;
  }
  console.log(`Question: ${question}`);
  const youAnswer = readlineSync.question('Your answer: ');
  if (youAnswer === String(myAnswer)) {
    console.log('Correct!\n');
    counter -= 1;
    resumeGame(fn);
  } else {
    console.log(`\n'${youAnswer}' is wrong answer ;(. Correct answer was '${myAnswer}'.
Let's try again, ${name}!`);
  }
};
