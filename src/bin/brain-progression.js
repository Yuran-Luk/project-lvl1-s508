#!/home/yuran/.nvm/versions/node/v12.2.0/bin/node
import { engine } from '..';
import Expression from '../games/progression';

console.log('Welcome to the Brain Games! \nWhat number is missing in the progression?\n');
console.log(`${engine(Expression)}`);
