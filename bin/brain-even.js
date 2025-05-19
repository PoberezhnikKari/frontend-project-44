#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { playGame } from '../src/brain-even.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

playGame(name);