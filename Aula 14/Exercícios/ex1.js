// Crie uma matriz 3x3 representada por uma lista de listas e:
// Imprima todos os elementos da matriz.
// Calcule a soma dos elementos da diagonal principal.

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (const linha of matriz) {
    // console.log(linha)
    for (const valor of linha) {
        console.log(valor)
    }
}

// [00, 01, 02]
// [10, 11, 12]
// [20, 21, 22]

let soma = 0
for (let i = 0; i < matriz.length; i++){
    // console.log(matriz[i][i])
    soma += matriz[i][i]
}

console.log('Soma: ', soma)