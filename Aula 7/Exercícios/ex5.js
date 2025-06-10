// 5. Crie um programa que leia um ano e informe se ele é bissexto. (Um ano é bissexto se for divisível por 4, mas não por 100, exceto se também for divisível por 400.)

// divisível por 4  mas não por 100
// divisível por 400.

let ano = Number(prompt('Ano: '))

if (ano % 400 === 0) {
    console.log('Bissexto')
} else if (ano % 4 === 0 && ano % 100 !== 0) { 
    console.log('Bissexto')
} else {
    console.log('Não é bissexto')
}