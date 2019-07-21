import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNum from '../utils';

const gameСondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameArguments = () => {
  const question = getRandomNum(0, 101);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(getGameArguments, gameСondition);
