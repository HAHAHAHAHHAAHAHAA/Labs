interface CalculatorState {
    current: string;
    previous: string;
    operation: string | null;
}

type OperationFunction = (a: number, b: number) => number;

const operations: Record<string, OperationFunction> = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
    },
    power: (a, b) => Math.pow(a, b),
};

const initialState: CalculatorState = {
    current: '0',
    previous: '',
    operation: null,
};

let state: CalculatorState = { ...initialState };

const updateDisplay = (): void => {
    const currentElement = document.getElementById('current')!;
    const previousElement = document.getElementById('previous')!;
    
    currentElement.textContent = state.current;
    previousElement.textContent = state.previous + (state.operation ? ` ${state.operation}` : '');
};

const appendNumber = (num: string): CalculatorState => {
    if (num === '.' && state.current.includes('.')) return state;
    if (state.current === '0' && num !== '.') {
        return { ...state, current: num };
    }
    return { ...state, current: state.current + num };
};

const chooseOperation = (operation: string): CalculatorState => {
    if (state.current === '') return state;
    if (state.previous !== '') {
        const newState = calculate(state);
        return {
            ...newState,
            previous: newState.current,
            operation,
            current: '',
        };
    }
    return {
        ...state,
        previous: state.current,
        operation,
        current: '',
    };
};

const calculate = (calcState: CalculatorState): CalculatorState => {
    if (!calcState.operation || calcState.previous === '' || calcState.current === '') return calcState;
    
    try {
        const a = parseFloat(calcState.previous);
        const b = parseFloat(calcState.current);
        const result = operations[calcState.operation](a, b).toString();
        return {
            current: result,
            previous: '',
            operation: null,
        };
    } catch (error) {
        return { ...initialState, current: 'Error' };
    }
};

const sqrt = (): CalculatorState => {
    const num = parseFloat(state.current);
    if (num < 0) return { ...initialState, current: 'Error' };
    return { ...state, current: Math.sqrt(num).toString() };
};

const clear = (): CalculatorState => ({ ...initialState });

const handleNumberClick = (num: string) => {
    state = appendNumber(num);
    updateDisplay();
};

const handleOperationClick = (operation: string) => {
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

document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        handleNumberClick(button.getAttribute('data-number')!);
    });
});

document.querySelectorAll('[data-action]').forEach(button => {
    const action = button.getAttribute('data-action')!;
    
    if (action === 'calculate') {
        button.addEventListener('click', handleCalculate);
    } else if (action === 'sqrt') {
        button.addEventListener('click', handleSqrt);
    } else if (action === 'clear') {
        button.addEventListener('click', handleClear);
    } else {
        button.addEventListener('click', () => {
            handleOperationClick(action);
        });
    }
});