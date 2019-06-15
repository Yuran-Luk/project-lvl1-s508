const result = (one, two, sym) => {
  switch (sym) {
    case '+':
      return one + two;
    case '-':
      return one - two;
    case '*':
      return one * two;
    default:
      return 'err';
  }
};

export default () => {
  const ranSym = () => {
    const strSym = '+-*';
    const index = Math.floor(Math.random() * (0, 3));
    return strSym[index];
  };
  const ranOne = Math.floor(Math.random() * (0, 10));
  const ranTwo = Math.floor(Math.random() * (0, 10));
  const symbol = ranSym();
  return `${ranOne} ${symbol} ${ranTwo}|${result(ranOne, ranTwo, symbol)}`;
};
