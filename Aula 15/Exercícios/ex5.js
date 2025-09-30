// Dado o array const numeros = [1, 2, 3, 4, 5];, use reduce para calcular a soma de todos os números.

numeros = [1, 2, 3, 4, 5]

const soma = numeros
    .reduce((acumulador, numero) => {
        return acumulador + numero
    }, 0)
console.log(soma)