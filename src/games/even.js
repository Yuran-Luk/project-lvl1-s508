import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNum from '../utils';

const gameСondition = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(getGameData, gameСondition);
