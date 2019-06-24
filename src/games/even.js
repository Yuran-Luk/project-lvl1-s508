import { cons } from 'hexlet-pairs';
import { getRandomNum } from '..';

const isTheNumberEven = number => number % 2 === 0;

export default () => {
  const question = getRandomNum(0, 100);
  const answer = isTheNumberEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};
