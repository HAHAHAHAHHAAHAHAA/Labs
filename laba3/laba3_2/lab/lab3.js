//1
export function findDividers(list, divider) {
    return list.filter(n => n % divider === 0);
}
//2
export function glueWords(words, glueChar) {
    return words.join(glueChar);
}
//3
export function sortByField(items, fieldName) {
    return [...items].sort((x, y) => {
        if (x[fieldName] < y[fieldName])
            return -1;
        if (x[fieldName] > y[fieldName])
            return 1;
        return 0;
    });
}
//4
export function trackCalls(originalFunc) {
    return (...inputs) => {
        console.log(`Функция вызвана с:`, [...inputs]);
        const output = originalFunc(...inputs);
        console.log(`Получен ответ:`, output);
        return output;
    };
}
