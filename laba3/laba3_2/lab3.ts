//1
export function findDividers(list: number[], divider: number): number[] {
    return list.filter(n => n % divider === 0);
}

//2
export function glueWords(words: string[], glueChar: string): string {
    return words.join(glueChar);
}

//3
export function sortByField<T>(items: T[], fieldName: keyof T): T[] {
    return [...items].sort((x, y) => {
        if (x[fieldName] < y[fieldName]) return -1;
        if (x[fieldName] > y[fieldName]) return 1;
        return 0;
    });
}

//4
export function trackCalls<F extends (...params: any[]) => any>(originalFunc: F): (...args: Parameters<F>) => ReturnType<F> {
    return (...inputs: Parameters<F>) => {
        console.log(`Функция вызвана с:`, [...inputs]);
        const output = originalFunc(...inputs);
        console.log(`Получен ответ:`, output);
        return output;
    };
}