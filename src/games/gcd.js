import { cons } from 'hexlet-pairs';
import { getRandomNum } from '..';

const getGreatestDivisor = (smallestNumber, highestNumber) => {
  const getDivisor = (numberOne, numberTwo, divisor) => {
    if (numberOne % divisor === 0 && numberTwo % divisor === 0) {
      return divisor;
    }
    return getDivisor(numberOne, numberTwo, divisor - 1);
  };
  return getDivisor(smallestNumber, highestNumber, smallestNumber);
};

export default () => {
  const firstNum = getRandomNum(0, 30);
  const secondNum = getRandomNum(0, 30);
  const question = `${firstNum} ${secondNum}`;
  if (firstNum < 1 || secondNum < 1) {
    return cons(question, 1);
  }
  if (firstNum <= secondNum) {
    return cons(question, getGreatestDivisor(firstNum, secondNum));
  }
  return cons(question, getGreatestDivisor(secondNum, firstNum));
};
