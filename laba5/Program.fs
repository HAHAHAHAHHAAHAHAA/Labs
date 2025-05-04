open System

[<EntryPoint>]
let main argv =
    printfn "5 + 3 = %d" (Funcs.add 5 3)
    printfn "10 - 5 = %d" (Funcs.subtract 10 5)
    printfn "4 * 5 = %d" (Funcs.multiply 4 5)
    printfn "10 / 2 = %d" (Funcs.divide 10 2)
    printfn "Факториал 5 = %d" (Funcs.factorial 5)
    printfn "7 + 10 = %d" (Funcs.add10 7)
    printfn "15 - 5 = %d" (Funcs.subtract5 15)
    printfn "6 * 2 = %d" (Funcs.multiplyBy2 6)
    printfn "9 / 3 = %d" (Funcs.divideBy3 9)
    0 