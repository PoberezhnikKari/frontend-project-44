import readlineSync from 'readline-sync';

export const playGame = (name) => {
  const totalQuestions = 3;
  let correctAnswers = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswers < totalQuestions) {
    const number = Math.floor(Math.random() * 100) + 1; // случайное число
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};