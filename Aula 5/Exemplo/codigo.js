let nome = prompt('Nome:') // variável nome receberá o texto escrito pelo usuário
// o número inserido pelo usuário é recebido como string e convertido para Number
// após, é armazenado na variável idade
let idade = Number(prompt('Idade:'))
let altura = Number(prompt('Altura'))
console.log(`Nome: ${nome}, idade: ${idade} e altura ${altura}`)
console.log(typeof nome, typeof idade, typeof altura)