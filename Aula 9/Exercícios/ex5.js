// 5. Escreva um programa que solicita ao usuário adivinhar um número secreto entre 1 e 10. O programa continua pedindo palpites até que o número correto seja adivinhado. Use o while para manter o laço até o palpite estar correto. Ao final, apresente o número de palpites, e parabenise o jogador.

let numeroSecreto = 1 + Math.round(Math.random() * 9)
// console.log(numeroSecreto)

let contPalpites = 0
let palpite = -1

while (palpite != numeroSecreto) {
    palpite = Number(prompt('Digite o palpite (1-10): '))

    contPalpites++
}

console.log('Parabéns, você acertou!!!')
console.log(`Número de palpites: ${contPalpites}`)