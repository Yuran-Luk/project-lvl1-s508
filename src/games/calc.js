import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNum from '../utils';

const gameСondition = 'What is the result of the expression?';
const signs = '+-*';

const calculate = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const getGameData = () => {
  const a = getRandomNum(0, 10);
  const b = getRandomNum(0, 10);
  const sign = signs[getRandomNum(0, signs.length - 1)];
  const question = `${a} ${sign} ${b}`;
  return cons(question, calculate(a, b, sign));
};

export default () => engine(getGameData, gameСondition);
