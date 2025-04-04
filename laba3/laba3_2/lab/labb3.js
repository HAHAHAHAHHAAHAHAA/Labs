import { findDividers } from './lab3.js';
import { glueWords } from './lab3.js';
import { sortByField } from './lab3.js';
import { trackCalls } from './lab3.js';
//1
const digits = [10, 15, 20, 25, 30];
const divResult = findDividers(digits, 5);
console.log('Делятся на 5:', divResult);
//2
const phrases = ['Как', 'дела', 'у', 'тебя?'];
const combined = glueWords(phrases, '_');
console.log('Соединено:', combined);
const gamers = [
    { nickname: 'Player1', level: 99 },
    { nickname: 'Player2', level: 1 },
    { nickname: 'Player3', level: 50 }
];
const sortedGamers = sortByField(gamers, 'level');
console.log('Игроки по уровням:', sortedGamers);
//4
const multiply = (x, y) => x * y;
const trackedMultiply = trackCalls(multiply);
const product = trackedMultiply(5, 4);
console.log('Итог умножения:', product);
