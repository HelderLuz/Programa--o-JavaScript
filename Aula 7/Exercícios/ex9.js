// 9. Crie um programa que receba três lados de um triângulo e classifique-o como:
// "Equilátero": todos os lados possuem a mesma medida
// "Isósceles": dois lados iguais
// "Escaleno": três lados diferentes

let lado1 = Number(prompt('Lado1: '))
let lado2 = Number(prompt('Lado2: '))
let lado3 = Number(prompt('Lado3: '))

if (lado1 == lado2 && lado2 == lado3) {
    console.log('Equilátero')
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log('Isóceles')
} else {
    console.log('Escaleno')
}