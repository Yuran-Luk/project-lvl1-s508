import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (getGameArguments, condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${condition}\n`);
  const name = readlineSync.question('May I have your name? ', { defaultInput: 'Player' });
  for (let i = 1; i <= roundsCount; i += 1) {
    const gameArguments = getGameArguments();
    const question = car(gameArguments);
    const answer = `${cdr(gameArguments)}`;
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ', { defaultInput: 'err' });
    if (yourAnswer !== answer) {
      console.log(`'${yourAnswer}' is wrong answer. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
    if (i === roundsCount) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
