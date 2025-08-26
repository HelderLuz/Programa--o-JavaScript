// 4. Leia um array de 10 números e em seguida um valor X. Busque X e informe a posição em que foi encontrado (ou “não encontrado”) na lista.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const x = Number(prompt('Digite um número: '))

const posicao = numeros.indexOf(x)
if (posicao !== -1) {
    console.log("Posição:", numeros.indexOf(x))
} else {
    console.log("Número não encontrado.")
}