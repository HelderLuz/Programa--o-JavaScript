// Crie um programa que imprime os números de 1 a 20, mas interrompe o laço quando o número for 13.

let num = 1

while (num <= 20) {
    if (num === 13) {
        break
    }

    console.log(num)
    num++
}