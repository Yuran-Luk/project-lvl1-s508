import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

export const engine = (expression) => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  const playTheGame = (round) => {
    if (round < 1) {
      console.log(`Congratulations, ${name}!`);
      return true;
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
    console.log(`'${yourAnswer}' is wrong answer. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
    return true;
  };
  const numberOfRounds = 3;
  return playTheGame(numberOfRounds);
};

export const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);
