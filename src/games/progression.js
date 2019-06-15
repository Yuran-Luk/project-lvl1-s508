export default () => {
  const number = Math.floor(Math.random() * (2, 9));
  const coeff = Math.floor(Math.random() * (2, 5));
  const q = Math.floor(Math.random() * (1, 9));

  const str = (num, sum, counter) => {
    if (counter === q) {
      const answer = num + sum;
      return `.. ${str(num + sum, sum, counter - 1)}|${answer}`;
    }
    if (counter < 1) {
      return num + sum;
    }
    return `${(num + sum)} ${str(num + sum, sum, counter - 1)}`;
  };

  return str(number, coeff, 9);
};
