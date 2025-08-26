// 6. Escreva uma função que encontre o maior e o menor valor em um array de números.

/**
 * 
 * @param {Array<number>} lista 
 */
function maiorValor(lista) {
    let maior = lista[0]

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
    }

    return maior
}

function menorValor(lista) {
    let menor = lista[0]

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i]
        }
    }

    return menor
}

const lista = [9, 3, 5, 7, 2, 10, 13, 6, 8]

console.log(`Maior valor: ${maiorValor(lista)}`)
console.log(`Menor valor: ${menorValor(lista)}`)