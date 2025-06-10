// 8. Escreva um programa que simule uma calculadora simples. O programa deve receber dois números e uma operação ( + , - , * , / ). O resultado da operação deve ser exibido.

let num1 = Number(prompt('Num1: '))
let num2 = Number(prompt('Num2: '))

let operacao = prompt('Digite a operação ( + , - , * , / ): ')

if (operacao === '+') {
    console.log('Soma: ', num1 + num2)
} else if (operacao === '-') {
    console.log('Subtração: ', num1 - num2)
} else if (operacao === '*') {
    console.log('Multiplicação: ', num1 * num2)
} else if (operacao === '/') {
    console.log('Divisão: ', num1 / num2)
} else {
    console.log('Operação inválida')
}