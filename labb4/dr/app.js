"use strict";
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0)
            throw new Error("Division by zero");
        return a / b;
    },
    power: (a, b) => Math.pow(a, b),
};
const initialState = {
    current: '0',
    previous: '',
    operation: null,
};
let state = Object.assign({}, initialState);
const updateDisplay = () => {
    const currentElement = document.getElementById('current');
    const previousElement = document.getElementById('previous');
    currentElement.textContent = state.current;
    previousElement.textContent = state.previous + (state.operation ? ` ${state.operation}` : '');
};
const appendNumber = (num) => {
    if (num === '.' && state.current.includes('.'))
        return state;
    if (state.current === '0' && num !== '.') {
        return Object.assign(Object.assign({}, state), { current: num });
    }
    return Object.assign(Object.assign({}, state), { current: state.current + num });
};
const chooseOperation = (operation) => {
    if (state.current === '')
        return state;
    if (state.previous !== '') {
        const newState = calculate(state);
        return Object.assign(Object.assign({}, newState), { previous: newState.current, operation, current: '' });
    }
    return Object.assign(Object.assign({}, state), { previous: state.current, operation, current: '' });
};
const calculate = (calcState) => {
    if (!calcState.operation || calcState.previous === '' || calcState.current === '')
        return calcState;
    try {
        const a = parseFloat(calcState.previous);
        const b = parseFloat(calcState.current);
        const result = operations[calcState.operation](a, b).toString();
        return {
            current: result,
            previous: '',
            operation: null,
        };
    }
    catch (error) {
        return Object.assign(Object.assign({}, initialState), { current: 'Error' });
    }
};
const sqrt = () => {
    const num = parseFloat(state.current);
    if (num < 0)
        return Object.assign(Object.assign({}, initialState), { current: 'Error' });
    return Object.assign(Object.assign({}, state), { current: Math.sqrt(num).toString() });
};
const clear = () => (Object.assign({}, initialState));
const handleNumberClick = (num) => {
    state = appendNumber(num);
    updateDisplay();
};
const handleOperationClick = (operation) => {
    state = chooseOperation(operation);
    updateDisplay();
};
const handleCalculate = () => {
    state = calculate(state);
    updateDisplay();
};
const handleSqrt = () => {
    state = sqrt();
    updateDisplay();
};
const handleClear = () => {
    state = clear();
    updateDisplay();
};
// Инициализация обработчиков событий
document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        handleNumberClick(button.getAttribute('data-number'));
    });
});
document.querySelectorAll('[data-action]').forEach(button => {
    const action = button.getAttribute('data-action');
    if (action === 'calculate') {
        button.addEventListener('click', handleCalculate);
    }
    else if (action === 'sqrt') {
        button.addEventListener('click', handleSqrt);
    }
    else if (action === 'clear') {
        button.addEventListener('click', handleClear);
    }
    else {
        button.addEventListener('click', () => {
            handleOperationClick(action);
        });
    }
});
