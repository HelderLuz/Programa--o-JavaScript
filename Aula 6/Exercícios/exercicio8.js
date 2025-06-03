// 8. Verifique se dois números são iguais e se ambos são maiores que 10

let num1 = Number(prompt('Número 1: '))
let num2 = Number(prompt('Número 2: '))

let saoIgualMaior10 = num1 === num2 && num1 > 10

console.log(`Os números são iguais e maiores que 10? \n${saoIgualMaior10}`)