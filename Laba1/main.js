import {
  extractEvenNumbers,
  calculateSquares,
  filterGreaterThan,
  calculateArraySum,
  transformArray,
  multiplyByTwo,
} from './lab1.js';

// Пример 1: Удвоение элементов массива
const initialArray = [1, 2, 3, 4, 5, 6];
const doubledArray = transformArray(initialArray, multiplyByTwo);
console.log('Удвоенный массив:', doubledArray); // [2, 4, 6, 8, 10, 12]

// Пример 2: Сумма квадратов четных чисел
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArray = extractEvenNumbers(numberArray);
const squaresArray = calculateSquares(evenArray);
const totalSumOfSquares = calculateArraySum(squaresArray);
console.log('Сумма квадратов чётных чисел:', totalSumOfSquares); // 120

// Пример 3: Среднее арифметическое чисел > 3
const filteredArray = filterGreaterThan(numberArray, 3);
const averageOfFiltered =
  calculateArraySum(filteredArray) / filteredArray.length;
console.log('Среднее чисел > 3:', averageOfFiltered.toFixed(1)); // 6.5
