export const getQuestionAndAnswer = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min +1)) + min;
  
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  const num1 = getRandomInt(1,50);
  const num2 = getRandomInt(1,50);
  
  let answer;
  
  switch(operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      answer = null;
  }
  
  return { question: `${num1} ${operator} ${num2}`, answer };
};