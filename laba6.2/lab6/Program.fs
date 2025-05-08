open System
open MathFuncs

let tryReadNumber (promptMessage: string) =
    printfn "%s" promptMessage
    match Double.TryParse(Console.ReadLine()) with
    | true, number -> Some number
    | false, _ -> 
        printfn "Ошибка: требуется числовое значение"
        None

let rec showMenu() =
    let handleOperation op prompts =
        let values = prompts |> List.map tryReadNumber
        if values |> List.forall Option.isSome then
            op (values.Head.Value) (values.Tail.Head.Value)
            |> printfn "Результат: %.2f"
        else
            printfn "Операция отменена из-за ошибки ввода"
    
    printfn "\n━━━━ Калькулятор ━━━━"
    printfn "1. Сложение\t\t2. Вычитание"
    printfn "3. Умножение\t\t4. Деление"
    printfn "5. Степень\t\t6. Квадратный корень"
    printfn "7. Синус угла\t\t8. Косинус угла"
    printfn "9. Тангенс угла\t\t0. Выход"
    printf "Выбор: "

    match Console.ReadLine() with
    | "1" -> handleOperation sum ["Первое слагаемое:"; "Второе слагаемое:"]
    | "2" -> handleOperation difference ["Уменьшаемое:"; "Вычитаемое:"]
    | "3" -> handleOperation product ["Множитель 1:"; "Множитель 2:"]
    | "4" -> 
        match tryReadNumber "Делимое:", tryReadNumber "Делитель:" with
        | Some a, Some b -> 
            safeDivision a b 
            |> function 
               | Ok res -> printfn "Частное: %.2f" res 
               | Error e -> printfn "%s" e
        | _ -> ()
    | "5" -> handleOperation exponentiate ["Основание:"; "Показатель:"]
    | "6" -> 
        tryReadNumber "Число для извлечения корня:" 
        |> Option.iter (fun x ->
            calculateRoot x 
            |> function 
               | Ok res -> printfn "Корень: %.2f" res 
               | Error e -> printfn "%s" e)
    | "7" | "8" | "9" as choice ->
        tryReadNumber "Угол в градусах:"
        |> Option.iter (fun angle ->
            let result = match choice with
                          | "7" -> sineOfAngle angle
                          | "8" -> cosineOfAngle angle
                          | _ -> tangentOfAngle angle
            printfn "Значение: %.2f" result)
    | "0" -> printfn "Завершение работы"
    | _ -> printfn "Неизвестная команда"
    
    if Console.ReadLine() <> "0" then showMenu()

[<EntryPoint>]
let main _ =
    showMenu()
    0