import { cons } from 'hexlet-pairs';
import { getRandomNum, engine } from '..';

const getGreatestDivisor = (numOne, numTwo) => {
  const getDivisor = (smallestNumber, hightestNumber, divisor) => {
    if (smallestNumber % divisor === 0 && hightestNumber % divisor === 0) {
      return divisor;
    }
    return getDivisor(smallestNumber, hightestNumber, divisor - 1);
  };
  if (numOne < numTwo) {
    return getDivisor(numOne, numTwo, numOne);
  }
  return getDivisor(numTwo, numOne, numTwo);
};

const brainGdc = () => {
  const a = getRandomNum(0, 30);
  const b = getRandomNum(0, 30);
  const question = `${a} ${b}`;
  return cons(question, getGreatestDivisor(a, b));
};

export default () => {
  console.log('Welcome to the Brain Games!\nFind the greatest common divisor of given numbers.\n');
  return engine(brainGdc);
};
