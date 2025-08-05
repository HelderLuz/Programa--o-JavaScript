// Escreva duas funções, uma chamada ehMenor e outra ehMaior, que recebem três números e retorne o menor e o maior valor entre eles, respectivamente.

function ehMaior(num1, num2, num3) {
    let maior = num1

    if (maior < num2) {
        maior = num2
    }
    if (maior < num3) {
        maior = num3
    }
    return maior
}

function ehMenor(num1, num2, num3) {
    let menor = num1 

    if (menor > num2) {
        menor = num2
    }
    if (menor > num3) {
        menor = num3
    }
    return menor
}

let num1 = Number(prompt('Digite o num1'))
let num2 = Number(prompt('Digite o num2'))
let num3 = Number(prompt('Digite o num3'))
console.log('Maior:', ehMaior(num1, num2, num3))
console.log('Menor:', ehMenor(num1, num2, num3))