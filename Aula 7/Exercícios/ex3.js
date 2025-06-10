// 3. Escreva um programa que categorize a idade de uma pessoa da seguinte forma:
// "Criança" se tiver menos de 12 anos.
// "Adolescente" se tiver entre 12 e 17 anos.
// "Adulto" se tiver 18 anos ou mais.

let idade = Number(prompt('Idade: '))

if (idade < 12) {
    console.log('Criança')
} else if (idade <= 17) {
    console.log('Adolescente')
} else {
    console.log('Adulto')
}