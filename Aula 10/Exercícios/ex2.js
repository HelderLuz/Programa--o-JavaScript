// Escreva uma função em JavaScript que verifique se um número é par ou ímpar.

/**
 * Imprime no console se um número é par ou impar
 * @param {number} numero - número que será verificado 
 * @example
 * // Imprime: O número 4 é par
 * parOuImpar(4)
 */
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par`)
    } else {
        console.log(`O número ${numero} é impar`)
    }
}

parOuImpar(4)
parOuImpar(5)