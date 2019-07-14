import { cons } from 'hexlet-pairs';
import { getRandomNum, engine } from '..';

const gameСondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = getRandomNum(0, 101);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(brainPrime, gameСondition);
