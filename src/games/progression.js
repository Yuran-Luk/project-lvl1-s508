import { cons } from 'hexlet-pairs';
import { getRandomNum } from '..';

const getProgression = (number, step, invisible, length) => {
  if (length === invisible) {
    return `.. ${getProgression(number + step, step, invisible, length - 1)}`;
  }
  if (length < 1) {
    return number + step;
  }
  return `${(number + step)} ${getProgression(number + step, step, invisible, length - 1)}`;
};

export default () => {
  const progressionStart = getRandomNum(3, 9);
  const progressionStep = getRandomNum(3, 6);
  const invisibleNumber = getRandomNum(2, 9);
  const progressionLength = 10;
  const question = getProgression(progressionStart, progressionStep,
    invisibleNumber, progressionLength);
  const answer = progressionStart + progressionStep * (progressionLength - invisibleNumber + 1);
  return cons(question, answer);
};
