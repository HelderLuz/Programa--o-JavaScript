// 5. Implementar um programa que encontre o menor valor de uma sequência de números informados pelo usuário. O programa deve solicitar, inicialmente, a quantidade de números a serem fornecidos. Em seguida, o usuário deve informar os números um a um (utilize prompt). O programa deve encontrar e exibir o menor valor da sequência.

let qtd = Number(prompt('Quantidade: '))
let menorNum = Number(prompt('Num: '))

for (let i = 1; i < qtd; i++){
    let numero = Number(prompt('Num: '))
    if (menorNum > numero) {
        menorNum = numero
    }
}

console.log('Menor número:', menorNum)