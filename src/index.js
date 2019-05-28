import readlineSync from 'readline-sync';

export default () => {
  const Name = readlineSync.question('May I have your name? ', { defaultInput: 'noname' });
  return `Hello, ${Name}!`;
};
