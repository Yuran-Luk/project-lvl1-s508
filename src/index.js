import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const roundsNumber = 3;

export const engine = (expression, condition) => {
  console.log(`Welcome to the Brain Games!\n${condition}\n`);
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'Player' });
  for (let roundsCounter = roundsNumber; roundsCounter > 0; roundsCounter -= 1) {
    const pairExpression = expression();
    const question = car(pairExpression);
    const answer = `${cdr(pairExpression)}`;
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ', { defaultInput: 'err' });
    if (yourAnswer !== answer) {
      console.log(`'${yourAnswer}' is wrong answer. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    if (roundsCounter === 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);
