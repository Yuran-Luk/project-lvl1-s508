const result = (one, two, symbol) => {
  switch (symbol) {
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
  const ranNumOne = Math.floor(Math.random() * (0, 10));
  const ranNumTwo = Math.floor(Math.random() * (0, 10));
  const symbol = ranSym();
  return `${ranNumOne} ${symbol} ${ranNumTwo}|${result(ranNumOne, ranNumTwo, symbol)}`;
};
