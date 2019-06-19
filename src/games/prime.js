import { getRandomNum } from '..';

export default () => {
  const question = getRandomNum(0, 101);
  if (question < 1) {
    return `${question}|no`;
  }
  const prime = (num, counter) => {
    if (num < 2) {
      return counter + 1;
    }
    if (question % num === 0) {
      return prime(num - 1, counter + 1);
    }
    return prime(num - 1, counter);
  };
  if (prime(question, 0) === 2) {
    return `${question}|yes`;
  }
  return `${question}|no`;
};
