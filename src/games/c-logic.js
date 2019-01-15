import readlineSync from 'readline-sync';

export const resumeGame = fn => (name, counter) => {
  const newCounter = counter - 1;
  return fn(name, newCounter);
};

export const endGame = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const compare = (myAnswer, name, func) => {
  const youAnswer = readlineSync.question('Your answer: ');
  if (youAnswer === String(myAnswer)) {
    console.log('Correct!');
    resumeGame(func);
  } else {
    console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${myAnswer}'.
Let's try again, ${name}!`);
  }
};
