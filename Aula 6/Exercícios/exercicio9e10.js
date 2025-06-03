// 9. Receba dois números e verifique se pelo menos um deles é negativo.
// 10. Dado um número, verifique se ele é múltiplo de 3 e de 5 ao mesmo tempo.

let num1 = Number(prompt('Num1: '))
let num2 = Number(prompt('Num2: '))

let negativo = num1 < 0 || num2 < 0

console.log(`Um dos números é negativo? \n${negativo}`)


let num3 = Number(prompt('Num3: '))

let multiplo = num3 % 3 == 0 && num3 % 5 == 0

console.log(`É múltiplo de 3 e 5? \n${multiplo}`)