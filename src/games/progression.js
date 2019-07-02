import { cons } from 'hexlet-pairs';
import { getRandomNum, engine } from '..';

const getProgression = (number, step, length) => {
  if (length === 1) {
    return number + step;
  }
  return `${(number + step)} ${getProgression(number + step, step, length - 1)}`;
};

const getQuestion = (progression, answer) => `${progression.substring(0, progression.indexOf(answer))}..${progression.substring(progression.length - (progression.length - progression.indexOf(answer) - answer.length))}`;


const progressionLength = 10;
const brainProgression = () => {
  const start = getRandomNum(3, 9);
  const step = getRandomNum(3, 6);
  const invisible = getRandomNum(1, progressionLength);
  const progression = getProgression(start, step, progressionLength);
  const answer = `${start + step * invisible}`;
  const question = getQuestion(progression, answer);
  console.log(`!!!!!!!!!!! ${progression}  ((((${answer}))))`);
  return cons(question, answer);
};

export default () => {
  console.log('Welcome to the Brain Games!\nWhat number is missing in the progression?\n');
  return engine(brainProgression);
};
