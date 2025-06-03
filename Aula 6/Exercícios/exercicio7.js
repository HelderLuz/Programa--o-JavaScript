// 7. Verifique se um número é positivo e maior que 100, ou negativo.

let numero = Number(prompt('Digite um número'))

let positivoMaior100 = numero > 100
let negativo = numero < 0

console.log(`O número é positivo e maior que 100? \n${positivoMaior100}`)

console.log(`O número é negativo? \n${negativo}`)