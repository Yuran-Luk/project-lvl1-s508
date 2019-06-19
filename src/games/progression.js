import { getRandomNum } from '..';

const getProgression = (number, step, invisible, length) => {
  if (length === invisible) {
    const answer = number + step;
    return `.. ${getProgression(number + step, step, invisible, length - 1)}|${answer}`;
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
  return getProgression(progressionStart, progressionStep, invisibleNumber, progressionLength);
};
