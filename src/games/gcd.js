const gcd = (little, big) => {
  const divisor = (numOne, numTwo, counter) => {
    if (numOne % counter === 0 && numTwo % counter === 0) {
      return counter;
    }
    return divisor(numOne, numTwo, counter - 1);
  };
  return divisor(little, big, little);
};

export default () => {
  const ranNum = () => Math.floor(Math.random() * (0, 30));
  const strExpression = (one, two) => {
    if (one < 1 || two < 1) {
      return `${one} ${two}|1`;
    }
    if (one <= two) {
      return `${one} ${two}|${gcd(one, two)}`;
    }
    return `${one} ${two}|${gcd(two, one)}`;
  };
  return strExpression(ranNum(), ranNum());
};
