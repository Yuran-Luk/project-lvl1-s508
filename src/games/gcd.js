export const Question = () => {
  const ranNum = () => Math.floor(Math.random() * (0, 30));
  return `${ranNum()} ${ranNum()}`;
};

const firstNum = (str, counter) => {
  if (str[counter + 1] === ' ') {
    return str[counter];
  }
  return Number(str[counter] + firstNum(str, counter + 1));
};

const secondNum = (str, counter) => {
  if (str[counter - 1] === ' ') {
    return str[counter];
  }
  return Number(secondNum(str, counter - 1) + str[counter]);
};

const gcd = (little, big) => {
  const divisor = (numOne, numTwo, counter) => {
    if (numOne % counter === 0 && numTwo % counter === 0) {
      return counter;
    }
    return divisor(numOne, numTwo, counter - 1);
  };
  return divisor(little, big, little);
};

export const Answer = (strNum) => {
  console.log(`Question: ${strNum}`);
  const first = firstNum(strNum, 0);
  const second = secondNum(strNum, strNum.length - 1);
  if (first < 1 || second < 1) {
    return '1';
  }
  if (first <= second) {
    return `${gcd(first, second)}`;
  }
  return `${gcd(second, first)}`;
};
