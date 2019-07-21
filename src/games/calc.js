import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNum from '../utils';

const gameСondition = 'What is the result of the expression?';
const signs = '+-*';

const getAnswer = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};

const getGameArguments = () => {
  const a = getRandomNum(0, 10);
  const b = getRandomNum(0, 10);
  const getRandomSign = () => signs[getRandomNum(0, signs.length - 1)];
  const sign = getRandomSign();
  const question = `${a} ${sign} ${b}`;
  return cons(question, getAnswer(a, b, sign));
};

export default () => engine(getGameArguments, gameСondition);
