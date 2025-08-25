// Leia um array de 12 números e depois dois valores X e Y correspondentes a posições no array. Escreva a soma dos valores nas posições X e Y.

const numeros = []

for (let i = 0; i < 12; i++) {
    let num = Number(prompt(`Digite o número [${i + 1}]: `))

    numeros.push(num)
}

const x = Number(prompt('Digite o X: '))
const y = Number(prompt('Digite o Y: '))

console.log(`X: ${x} Y: ${y}`)
console.log(numeros)

console.log(`Soma dos valores ${numeros[x]} e ${numeros[y]} é: ${numeros[x] + numeros[y]}`)