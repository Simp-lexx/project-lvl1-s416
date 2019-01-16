import readlineSync from 'readline-sync';
// import { name } from '../bin/brain-games';
// import { hi } from '..';

let counter = 3;

const resumeGame = (fn, arg) => fn(arg);

const compare = (myAnswer, question, name, fn) => {
  if (counter === 0) {
    console.log(`\nCongratulations, ${name}!`);
    return;
  }
  console.log(`Question: ${question}`);
  const youAnswer = readlineSync.question('Your answer: ');
  if (youAnswer === String(myAnswer)) {
    console.log('Correct!');
    counter -= 1;
    resumeGame(fn, name);
  } else {
    console.log(`\n'${youAnswer}' is wrong answer ;(. Correct answer was '${myAnswer}'.
Let's try again, ${name}!`);
  }
};

export default compare;
