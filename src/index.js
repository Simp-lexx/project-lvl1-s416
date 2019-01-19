import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundQuantity = 3;

const gameEngine = (description, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${gamerName}!\n`);

  const startRound = (counter) => {
    if (counter === 0) {
      console.log(`\nCongratulations, ${gamerName}!`);
      return;
    }
    const gameData = generateGameData();
    const question = car(gameData);
    const answer = cdr(gameData);
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (gamerAnswer === answer) {
      console.log('Correct!');
      startRound(counter - 1);
    } else {
      console.log(`\n'${gamerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${gamerName}!`);
    }
  };
  startRound(roundQuantity);
};

export default gameEngine;
