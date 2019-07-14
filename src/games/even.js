import { cons } from 'hexlet-pairs';
import { getRandomNum, engine } from '..';

const gameСondition = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const brainEven = () => {
  const question = getRandomNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(brainEven, gameСondition);
