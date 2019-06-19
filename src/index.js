import readlineSync from 'readline-sync';

const askName = () => readlineSync.question('May I have your name? ', { defaultInput: 'noname' });

export const printHi = () => `Hello, ${askName()}! \n`;

const printGameCondition = (nameOfGame) => {
  const welcome = 'Welcome to the Brain Games!\n';
  switch (nameOfGame) {
    case 'even':
      return `${welcome}Answer "yes" if number even otherwise answer "no".\n`;
    case 'gcd':
      return `${welcome}Find the greatest common divisor of given numbers.\n`;
    case 'prime':
      return `${welcome}Answer "yes" if given number is prime. Otherwise answer "no".\n`;
    case 'progression':
      return `${welcome}What number is missing in the progression?\n`;
    case 'calc':
      return `${welcome}What is the result of the expression?\n`;
    default:
      return 'err';
  }
};

const getQuestion = (expression, counter) => {
  if (expression[counter + 1] === '|') {
    return expression[counter];
  }
  return expression[counter] + getQuestion(expression, counter + 1);
};

const getAnswer = (expression, counter) => {
  if (expression[counter - 1] === '|') {
    return expression[counter];
  }
  return getAnswer(expression, counter - 1) + expression[counter];
};

export const engine = (expression, game) => {
  console.log(printGameCondition(game));
  const name = askName();
  const playTheGame = (round) => {
    if (round === 0) {
      return `Congratulations, ${name}!`;
    }
    const stringExpression = expression();
    const question = getQuestion(stringExpression, 0);
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ', { defaultInput: 'err' });
    const answer = getAnswer(stringExpression, stringExpression.length - 1);
    if (yourAnswer === answer) {
      console.log('Correct!');
      return playTheGame(round - 1);
    }
    console.log(`'${yourAnswer}' is wrong answer. Correct answer was '${answer}'.`);
    return `Let's try again, ${name}!`;
  };
  const numberOfRounds = 3;
  return playTheGame(numberOfRounds);
};

export const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);
