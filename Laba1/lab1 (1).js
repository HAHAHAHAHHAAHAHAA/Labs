export function extractEvenNumbers(numberArray) {
  const evenNumbersList = []; 
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) { 
      evenNumbersList.push(numberArray[i]); 
    }
  }
  return evenNumbersList;
}

export function calculateSquares(numberArray) {
const squareList = [];
for (let i = 0; i < numberArray.length; i++) {
  squareList.push(numberArray[i] * numberArray[i]);
}
return squareList;
}

export function filterGreaterThan(array, threshold) {
return array.filter(item => item > threshold);
}

export function calculateArraySum(numberArray) {
let totalSum = 0;
for (let i = 0; i < numberArray.length; i++) {
  totalSum += numberArray[i];
}
return totalSum;
}

export function transformArray(array, transformationFunction) {
return array.map(transformationFunction);
}

export function multiplyByTwo(number) {
return number * 2;
}