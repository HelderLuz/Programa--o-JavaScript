// Dada uma variável idade com um número inteiro, crie uma variável idade_str que converta esse número para uma string. Em seguida, crie uma frase que diga "Eu tenho [idade] anos."

let idade = 23
let idade_str = String(idade)
console.log('Eu tenho ' + idade_str + ' anos.')
console.log('Eu tenho', idade_str, 'anos.')
console.log(`Eu tenho ${idade_str} anos.`)