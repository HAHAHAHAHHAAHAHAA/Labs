module MathFuncs

open System

let sum (x: float) (y: float) = x + y
let difference (x: float) (y: float) = x - y
let product (x: float) (y: float) = x * y
let safeDivision (dividend: float) (divisor: float) = 
    match divisor with
    | 0.0 -> Error "Деление на ноль невозможно"
    | _ -> Ok (dividend / divisor)

let exponentiate (baseVal: float) (exponent: float) = Math.Pow(baseVal, exponent)
let calculateRoot (value: float) = 
    match value >= 0.0 with
    | true -> Ok (Math.Sqrt(value))
    | false -> Error "Корень из отрицательного числа не определён"

let toRadians (degrees: float) = degrees * Math.PI / 180.0
let sineOfAngle degrees = Math.Sin (toRadians degrees)
let cosineOfAngle degrees = Math.Cos (toRadians degrees)
let tangentOfAngle degrees = Math.Tan (toRadians degrees)