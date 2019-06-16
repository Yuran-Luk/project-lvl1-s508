export default () => {
  const number = Math.floor(Math.random() * (0, 101));
  if (number < 1) {
    return `${number}|no`;
  }
  const prime = (num, counter) => {
    if (num < 2) {
      return counter + 1;
    }
    if (number % num === 0) {
      return prime(num - 1, counter + 1);
    }
    return prime(num - 1, counter);
  };
  if (prime(number, 0) === 2) {
    return `${number}|yes`;
  }
  return `${number}|no`;
};
