#!/usr/bin/env node

import readlineSync from 'readline-sync';

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function playGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const question = Math.floor(Math.random() * 100) + 1; // число от 1 до 100
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playGame();
