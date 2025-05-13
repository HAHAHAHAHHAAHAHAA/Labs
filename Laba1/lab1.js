export const extractEvenNumbers = (numberArray) => 
  numberArray.filter(num => num % 2 === 0);

export const calculateSquares = (numberArray) => 
  numberArray.map(num => num ** 2);

export const filterGreaterThan = (array, threshold) => 
  array.filter(item => item > threshold);

export const calculateArraySum = (numberArray) => 
  numberArray.reduce((acc, num) => acc + num, 0);

export const transformArray = (array, transformationFunction) => 
  array.map(transformationFunction);

export const multiplyByTwo = (number) => number * 2;