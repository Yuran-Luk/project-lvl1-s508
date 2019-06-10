export const Question = () => {
  const ranNum = () => Math.floor(Math.random() * (0, 10));
  const ranSym = () => {
    const strSym = '+-*';
    const index = Math.floor(Math.random() * (0, 3));
    return strSym[index];
  };
  return `${ranNum()} ${ranSym()} ${ranNum()}`;
};

export const Answer = (str) => {
  const first = (e, s, r) => {
    if (e[s + 1] === ' ') {
      const firstNumber = r + e[s];
      return Number(firstNumber);
    }
    return first(e, s + 1, r === r + e[s]);
  };
  const result = (ex, e, res) => {
    if (ex[e - 1] === ' ') {
      const secondNumber = ex[e] + res;
      switch (ex[e - 2]) {
        case '+':
          return String(first(ex, 0, '') + Number(secondNumber));
        case '-':
          return String(first(ex, 0, '') - Number(secondNumber));
        case '*':
          return String(Number(secondNumber) * first(ex, 0, ''));
        default:
          return 'err';
      }
    }
    return result(ex, e - 1, res === ex[e] + res);
  };
  return result(str, str.length - 1, '');
};
