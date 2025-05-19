#!/usr/bin/env node

import readlineSync from 'readline-sync';

function generateProgression(length, start, step) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
}

function hideElement(progression) {
  const indexToHide = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[indexToHide];
  const progressionWithHidden = [...progression];
  progressionWithHidden[indexToHide] = '..';
  return { progressionWithHidden, hiddenValue };
}

function playGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const length = Math.floor(Math.random() * 6) + 5; // от 5 до 10
    const start = Math.floor(Math.random() * 20) + 1;
    const step = Math.floor(Math.random() * 10) + 1;

    const progression = generateProgression(length, start, step);
    const { progressionWithHidden, hiddenValue } = hideElement(progression);

    console.log(`Question: ${progressionWithHidden.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(hiddenValue)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playGame();
