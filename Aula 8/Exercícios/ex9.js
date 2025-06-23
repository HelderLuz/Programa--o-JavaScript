// 9. Escreva um programa que leia uma sequência de números (quantidade definida pelo usuário) e exiba quantos números são positivos, negativos e zeros.

let qtd = Number(prompt('Digite a quantidade de números:'))
let positivos = 0
let negativos = 0
let zeros = 0

for (let i = 0; i < qtd; i++) {
    let numero = Number(prompt(`Número ${i+1}: `))

    if (numero > 0) {
        positivos++;
    } else if (numero < 0) {
        negativos++;
    } else {
        zeros++;
    }
}

console.log(`Número de positivos: ${positivos}`)
console.log(`Número de negativos: ${negativos}`)
console.log(`Número de zeros: ${zeros}`)