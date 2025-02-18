import {extractEvenNumbers} from './lab1.js'
import {calculateSquares} from './lab1.js'
import {filterGreaterThan} from './lab1.js'
import {calculateArraySum} from './lab1.js'
import {transformArray} from './lab1.js'
import {multiplyByTwo} from './lab1.js'

const initialArray = [1, 2, 3, 4, 5, 6]
const doubledArray = transformArray(initialArray, multiplyByTwo)
console.log(doubledArray)

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const evenArray = extractEvenNumbers(numberArray)
const squaresArray = calculateSquares(evenArray)
let totalSumOfSquares = calculateArraySum(squaresArray)
console.log("Сумма квадратов всех чётных чисел: " + totalSumOfSquares)

const filteredArray = filterGreaterThan(numberArray, 3)
let averageOfFiltered = calculateArraySum(filteredArray) / filteredArray.length
console.log("Среднее арифметическое всех чисел, больших заданного значения: " + averageOfFiltered)