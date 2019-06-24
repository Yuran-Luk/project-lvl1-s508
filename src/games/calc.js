import { cons } from 'hexlet-pairs';
import { getRandomNum } from '..';

const getAnswer = (numberOne, numberTwo, symbol) => {
  switch (symbol) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      return 'err';
  }
};

const getRandomSymbol = () => {
  const symbols = '+-*';
  const index = getRandomNum(0, symbols.length - 1);
  return symbols[index];
};

export default () => {
  const numberOne = getRandomNum(0, 10);
  const numberTwo = getRandomNum(0, 10);
  const symbol = getRandomSymbol();
  const question = `${numberOne} ${symbol} ${numberTwo}`;
  return cons(question, getAnswer(numberOne, numberTwo, symbol));
};
