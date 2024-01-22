const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
	let sumResult = array.reduce((sum, operand) => sum + operand, 0);
  return sumResult; 
};

const multiply = function(array) {
	let multiplyResult = array.reduce((sum, operand) => sum * operand, 1);
  return multiplyResult; 

};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let numbers = [];
  for (let i = 1; i <= a; i++) {
    numbers.push(i);
  }
  let factorialResult = numbers.reduce((sum, operand) => sum * operand, 1);
  return factorialResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
