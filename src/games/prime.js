import { cons } from 'hexlet-pairs';
import { getRandomNum } from '..';

const howManyDivisors = (dividend, divisor) => {
  if (divisor < 2) {
    return 1;
  }
  if (dividend % divisor === 0) {
    return 1 + howManyDivisors(dividend, divisor - 1);
  }
  return howManyDivisors(dividend, divisor - 1);
};

const isTheNumberPrime = number => howManyDivisors(number, number) === 2;

export default () => {
  const number = getRandomNum(0, 101);
  const answer = isTheNumberPrime(number) ? 'yes' : 'no';
  return cons(number, answer);
};
