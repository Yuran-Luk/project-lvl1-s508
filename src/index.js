import readlineSync from 'readline-sync';


export const printHi = () => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  return `Hello, ${name}! \n`;
};

const Question = (expression, counter) => {
  if (expression[counter + 1] === '|') {
    return expression[counter];
  }
  return expression[counter] + Question(expression, counter + 1);
};

const Answer = (expression, counter) => {
  if (expression[counter - 1] === '|') {
    return expression[counter];
  }
  return Answer(expression, counter - 1) + expression[counter];
};

export const engine = (expression) => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  const iter = (counter) => {
    if (counter === 0) {
      return `Congratulations, ${name}!`;
    }
    const strEx = expression();
    const question = Question(strEx, 0);
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ', { defaultInput: 'err' });
    const answer = Answer(strEx, strEx.length - 1);
    if (yourAnswer === answer) {
      console.log('Correct!');
      return iter(counter - 1);
    }
    console.log(`'${yourAnswer}' is wrong answer. Correct answer was '${answer}'.`);
    return `Let's try again, ${name}!`;
  };
  return iter(3);
};
