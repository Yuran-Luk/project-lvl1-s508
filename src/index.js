import readlineSync from 'readline-sync';


export const printHi = () => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  return `Hello, ${name}! \n`;
};

export const engine = (Qestion, Answer) => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${Qestion}`);
    const yourAnswer = readlineSync.question('Your answer: ', { defaultInput: '' });
    if (yourAnswer === Answer) {
      console.log('Correct!');
    } else {
      console.log(`${yourAnswer} is wrong answer. Correct answer was ${Answer}. \n`);
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
