#!/home/yuran/.nvm/versions/node/v12.2.0/bin/node
import { Engine } from '..';
import Expression from '../games/prime';

console.log('Welcome to the Brain Games! \nAnswer "yes" if given number is prime. Otherwise answer "no".\n');
console.log(Engine(Expression));
