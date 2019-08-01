import { cons } from 'hexlet-pairs';
import engine from '..';
import getRandomNum from '../utils';

const gameСondition = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (start, step, length) => {
  if (length === 0) {
    return '';
  }
  return `${start} ${getProgression(start + step, step, length - 1)}`;
};

const getQuestion = (progression, answer) => {
  const firstPart = progression.substring(0, progression.indexOf(answer));
  const secondPart = progression.substring(progression.indexOf(answer) + answer.length);
  return `${firstPart}..${secondPart}`;
};

const getGameData = () => {
  const start = getRandomNum(3, 9);
  const step = getRandomNum(3, 6);
  const progression = getProgression(start, step, progressionLength);
  const elementHidden = getRandomNum(0, progressionLength - 1);
  const answer = `${start + step * elementHidden}`;
  const question = getQuestion(progression, answer);
  return cons(question, answer);
};

export default () => engine(getGameData, gameСondition);
