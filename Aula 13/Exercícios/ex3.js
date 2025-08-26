// 3. Declare um array e preencha-o apenas com números ímpares informados pelo usuário até ter 10 elementos. Ao final, apresente o array.

const impares = []

while (impares.length < 10) {
    let num = Number(prompt(`Digite um número: `))

    if (num % 2 === 1) {
        impares.push(num)
    }
}

console.log("Impares: ", impares.join(", "))