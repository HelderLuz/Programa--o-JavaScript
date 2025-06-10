// 10. Escreva um programa que leia o salário de um funcionário e calcule o valor do imposto de renda a ser pago, considerando:
// Faixa salarial até R$ 2.000,00: isento
// R$ 2.000,01 até R$ 3.500,00: 10%
// Acima de R$ 3.500,00: 20%.

let salario = Number(prompt('Salário: '))

// if (salario <= 2000) {
//     console.log('Isento')
// } else if (salario <= 3500) {
//     console.log('IR: ', salario * 0.1)
// } else {
//     console.log('IR: ', salario * 0.2)
// }

let imposto = 0

// let resto = 0
// if (salario > 3500) {
//     resto = salario - 3500
//     imposto = resto * 0.2
// } 
// salario = salario - resto

// if (salario > 2000) {
//     resto = salario - 2000
//     imposto = imposto + resto * 0.1
// }

if (salario > 3500) {
    imposto = (salario - 3500) * 0.2 + 150
} else if (salario > 2000) {
    imposto = (salario - 2000) * 0.1
}

console.log(imposto)