import readlineSync from 'readline-sync';


export const printHi = () => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  return `Hello, ${name}! \n`;
};

// Question из строки "(вопрос)|(ответ)" возвращает вопрос
const Question = (expression, counter) => {
  if (expression[counter + 1] === '|') {
    return expression[counter];
  }
  return expression[counter] + Question(expression, counter + 1);
};

// Answer из строки "(вопрос)|(ответ)" возвращает ответ
const Answer = (expression, counter) => {
  if (expression[counter - 1] === '|') {
    return expression[counter];
  }
  return Answer(expression, counter - 1) + expression[counter];
};

// Движок принимает функцию возвращающую строку - "(вопрос)|(ответ)"
export const Engine = (expression) => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  const iter = (counter) => {
    if (counter === 0) {
      return `Congratulations, ${name}!`;
    }
    const strExpress = expression(); // "(вопрос)|(ответ)"
    const question = Question(strExpress, 0); // "вопрос"
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ', { defaultInput: 'err' });
    const answer = Answer(strExpress, strExpress.length - 1); // "верный ответ"
    if (yourAnswer === answer) {
      console.log('Correct!');
      return iter(counter - 1);
    }
    console.log(`'${yourAnswer}' is wrong answer. Correct answer was '${answer}'.`);
    return `Let's try again, ${name}!`;
  };
  return iter(3);
};
