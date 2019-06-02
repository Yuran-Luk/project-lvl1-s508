import readlineSync from 'readline-sync';

export const printHi = () => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  return `Hello, ${name}!`;
};

export const even = () => {
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  for (let i = 0; i < 3; i += 1) {
    const random = Math.floor(Math.random() * (0, 100));
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ', { defaultInput: '' });
    const yes = (random % 2 === 0);
    const no = (random % 2 !== 0);
    if ((answer === 'yes' && yes) || (answer === 'no' && no)) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      console.log("'yes' is wrong answer. Correct answer was 'no'.");
      return `Let's try again, ${name}!`;
    } else {
      console.log("'no' is wrong answer. Correct answer was 'yes'.");
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
