import { cons } from 'hexlet-pairs';
import { getRandomNum, engine } from '..';

const isPrime = (number) => {
  const howManyDivisors = (dividend, divisor) => {
    if (divisor < 2) {
      return 1;
    }
    if (dividend % divisor === 0) {
      return 1 + howManyDivisors(dividend, divisor - 1);
    }
    return howManyDivisors(dividend, divisor - 1);
  };
  return howManyDivisors(number, number) === 2;
};

const brainPrime = () => {
  const number = getRandomNum(0, 101);
  const answer = isPrime(number) ? 'yes' : 'no';
  return cons(number, answer);
};

export default () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".\n');
  return engine(brainPrime);
};
