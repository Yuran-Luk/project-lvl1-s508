import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (getGameData, condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${condition}\n`);
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'Player' });
  for (let i = 1; i <= roundsCount; i += 1) {
    const gameData = getGameData();
    const question = car(gameData);
    const answer = cdr(gameData);
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ', { defaultInput: 'err' });
    if (yourAnswer !== answer) {
      console.log(`'${yourAnswer}' is wrong answer. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
