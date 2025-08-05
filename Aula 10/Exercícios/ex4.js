// Escreva uma função chamada somaImpares que receba um número inteiro positivo n e retorne a soma de todos os números ímpares de 0 até n.

function somaImpares(n) {
    let soma = 0;

    for (let i = 1; i <= n; i+=2) {
        soma += i
    }

    return soma
}

function somaImpares2(n) {
    let soma = 0

    for (let i = 1; i <= n; i++){
        if (i % 2 === 1) {
            soma += i
        }
    }

    return soma
}

console.log(somaImpares(10))
console.log(somaImpares2(10))