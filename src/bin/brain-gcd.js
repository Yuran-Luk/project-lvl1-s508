#!/home/yuran/.nvm/versions/node/v12.2.0/bin/node
import { engine } from '..';
import { Question, Answer } from '../games/gcd';

console.log('Welcome to the Brain Games! \nFind the greatest common divisor of given numbers.\n');
console.log(engine(Question, Answer));
