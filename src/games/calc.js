import { cons } from 'hexlet-pairs';
import { getRandomNum, engine } from '..';

const getAnswer = (numberOne, numberTwo, symbol) => {
  switch (symbol) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    default:
      return numberOne * numberTwo;
  }
};

const signs = '+-*';
const getRandomSymbol = () => {
  const index = getRandomNum(0, signs.length - 1);
  return signs[index];
};

const brainCalc = () => {
  const a = getRandomNum(0, 10);
  const b = getRandomNum(0, 10);
  const symbol = getRandomSymbol();
  const question = `${a} ${symbol} ${b}`;
  return cons(question, getAnswer(a, b, symbol));
};

export default () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
  return engine(brainCalc);
};
