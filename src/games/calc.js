import { cons } from 'hexlet-pairs';
import { getRandomNum, engine } from '..';

const gameСondition = 'What is the result of the expression?';
const signs = '+-*';

const getAnswer = (numberOne, numberTwo, sign) => {
  switch (sign) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    default:
      return numberOne * numberTwo;
  }
};

const brainCalc = () => {
  const a = getRandomNum(0, 10);
  const b = getRandomNum(0, 10);
  const getRandomSign = () => signs[getRandomNum(0, signs.length - 1)];
  const sign = getRandomSign();
  const question = `${a} ${sign} ${b}`;
  return cons(question, getAnswer(a, b, sign));
};

export default () => engine(brainCalc, gameСondition);
