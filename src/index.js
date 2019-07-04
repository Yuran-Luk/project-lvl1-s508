import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export const engine = (expression) => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'Player' });
  let rounds = 3;
  while (rounds > 0) {
    const pairExpression = expression();
    const question = car(pairExpression);
    const answer = `${cdr(pairExpression)}`;
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ', { defaultInput: 'err' });
    if (yourAnswer !== answer) {
      console.log(`'${yourAnswer}' is wrong answer. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    if (rounds === 1) {
      console.log(`Congratulations, ${name}!`);
    }
    rounds -= 1;
  }
};

export const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);
