// Escreva uma função chamada ehPrimo que receba um número inteiro positivo e retorne true se for um número primo, e false caso contrário.

// 1, 2, 3, 4, 5

/**
 * Verifica se o número é primo
 * @param {number} numero - número que será verificado se é primo
 * @returns {boolean} retorna true se o número é primo, ou false caso não seja.
 */
function ehPrimo(numero) {
    if (numero <= 1) {
        return false
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0)
            return false
    }

    return true
}

for (let i = 0; i < 20; i++){
    console.log(`O número ${i} é primo? ${ehPrimo(i)}`)
}