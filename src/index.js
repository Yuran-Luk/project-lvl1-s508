import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const printGameCondition = (nameOfGame) => {
  const welcome = 'Welcome to the Brain Games!\n';
  switch (nameOfGame) {
    case 'even':
      return `${welcome}Answer "yes" if number even otherwise answer "no".\n`;
    case 'gcd':
      return `${welcome}Find the greatest common divisor of given numbers.\n`;
    case 'prime':
      return `${welcome}Answer "yes" if given number is prime. Otherwise answer "no".\n`;
    case 'progression':
      return `${welcome}What number is missing in the progression?\n`;
    case 'calc':
      return `${welcome}What is the result of the expression?\n`;
    default:
      return 'err';
  }
};

export const engine = (expression, game) => {
  console.log(printGameCondition(game));
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  const playTheGame = (round) => {
    if (round < 1) {
      return `Congratulations, ${name}!`;
    }
    const pairExpression = expression();
    const question = car(pairExpression);
    const answer = `${cdr(pairExpression)}`;
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ', { defaultInput: 'err' });
    if (yourAnswer === answer) {
      console.log('Correct!');
      return playTheGame(round - 1);
    }
    console.log(`'${yourAnswer}' is wrong answer. Correct answer was '${answer}'.`);
    return `Let's try again, ${name}!`;
  };
  const numberOfRounds = 3;
  return playTheGame(numberOfRounds);
};

export const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);
