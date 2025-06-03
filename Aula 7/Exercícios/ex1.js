// 1. Crie um programa que verifique e informe se um número é positivo, negativo ou zero

let numero = Number(prompt('Digite o número: '))

if (numero > 0) {
    console.log('Positivo!')
} else if (numero < 0) {
    console.log('Negativo!')
} else {
    console.log('Zero!')
}