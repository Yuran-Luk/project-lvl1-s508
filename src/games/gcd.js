import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNum from '../utils';

const gameСondition = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }
  const x = a > b ? getGcd(a % b, b) : getGcd(a, b % a);
  return x;
};

const getGameData = () => {
  const a = getRandomNum(0, 30);
  const b = getRandomNum(0, 30);
  const question = `${a} ${b}`;
  return cons(question, String(getGcd(a, b)));
};

export default () => engine(getGameData, gameСondition);
