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
  const getGameConditions = (numberOne, numberTwo) => {
    const question = `${numberOne} ${numberTwo}`;
    if (numberOne < 1 || numberTwo < 1) {
      return `${question}|1`;
    }
    if (numberOne <= numberTwo) {
      return `${question}|${getGreatestDivisor(numberOne, numberTwo)}`;
    }
    return `${question}|${getGreatestDivisor(numberTwo, numberOne)}`;
  };
  return getGameConditions(firstNum, secondNum);
};
