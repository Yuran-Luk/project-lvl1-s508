#!/home/yuran/.nvm/versions/node/v12.2.0/bin/node
import { engine } from '..';
import Expression from '../games/calc';

console.log('Welcome to the Brain Games! \nWhat is the result of the expression?\n');
console.log(engine(Expression));
