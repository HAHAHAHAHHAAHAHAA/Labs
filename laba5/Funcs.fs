module MathFunctions

// Чистые функции для базовых операций
let add x y = x + y
let subtract x y = x - y
let multiply x y = x * y
let divide x y = x / y

// Рекурсивный факториал
let rec factorial n =
    if n = 0 then 1
    else n * factorial (n - 1)

// Специализированные функции через каррирование
let add10 = add 10
let subtract5 = subtract 5
let multiplyBy2 = multiply 2
let divideBy3 = divide 3