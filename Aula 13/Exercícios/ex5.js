// 5. Escreva uma função em JavaScript que calcule a média de um array de números.

function media(numeros) {
    let soma = 0

    for (let num of numeros) {
        soma  = soma + num
    }

    return soma / numeros.length
}

console.log("Média da lista:", media([1, 2, 3, 4, 5, 6, 7, 8, 9]))