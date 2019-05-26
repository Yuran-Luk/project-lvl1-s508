import readlineSync from 'readline-sync';

export const printHi = a => {
	const Name = readlineSync.question('May I have your name? ', {defaultInput:'noname'});
	return `Hello, ${Name}!`;
};