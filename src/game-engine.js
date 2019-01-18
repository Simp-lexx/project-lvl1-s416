import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { welcome, hi } from '.';

const roundQuantity = 3;

const gameEngine = (description, genQuestion) => {
  welcome();
  console.log(`${description}`);
  const name = hi();

  const startRound = (counter) => {
    if (counter === 0) {
      console.log(`\nCongratulations, ${name}!`);
      return;
    }
    const round = genQuestion();
    const question = car(round);
    const myAnswer = cdr(round);
    console.log(`Question: ${question}`);
    const youAnswer = readlineSync.question('Your answer: ');
    if (youAnswer === String(myAnswer)) {
      console.log('Correct!');
      startRound(counter - 1);
    } else {
      console.log(`\n'${youAnswer}' is wrong answer ;(. Correct answer was '${myAnswer}'.\nLet's try again, ${name}!`);
    }
  };
  startRound(roundQuantity);
};

export default gameEngine;
