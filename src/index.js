import readlineSync from 'readline-sync';


export const printHi = () => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  return `Hello, ${name}! \n`;
};

export const engine = (Question, Answer) => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  const iter = (Q, A, counter) => {
    if (counter === 0) {
      return `Congratulations, ${name}!`;
    }
    const question = Q();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ', { defaultInput: 'err' });
    const answer = A(question);
    if (yourAnswer === answer) {
      console.log('Correct!');
      return iter(Question, Answer, counter - 1);
    }
    console.log(`'${yourAnswer}' is wrong answer. Correct answer was '${answer}'.`);
    return `Let's try again, ${name}!`;
  };
  return iter(Question, Answer, 3);
};
