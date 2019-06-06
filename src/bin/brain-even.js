#!/home/yuran/.nvm/versions/node/v12.2.0/bin/node
import { engine } from '..';

console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');

const Question = () => Math.floor(Math.random() * (0, 100));
const Answer = (s) => {
  const q = (s % 2 === 0) ? 'yes' : 'no';
  return q;
};

console.log(engine(Question, Answer));
