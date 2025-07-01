// 6. Escreva um programa que solicite ao usuário números inteiros positivos até que ele digite um número negativo. O programa deve somar todos os números positivos e, ao final, exibir a soma.

let soma = 0
let numero = 0

while (numero >= 0) {
    numero = Number(prompt('Digite um número (negativo para sair): '))

    if (numero >= 0) {
        soma += numero
    }
}

console.log(`Soma: ${soma}`)