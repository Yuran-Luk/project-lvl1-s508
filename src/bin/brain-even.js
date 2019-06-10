#!/home/yuran/.nvm/versions/node/v12.2.0/bin/node
import { engine } from '..';
import { Question, Answer } from '../games/even';

console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');

console.log(engine(Question, Answer));
