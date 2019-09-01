import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundQuantity = 3;

const selectGame = () => {
  console.log('Please enter number for select game to play: ');
  console.log('1. Even game');
  console.log('2. Calc game');
  console.log('3. General common divisor game');
  console.log('4. Progression game');
  
};

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
