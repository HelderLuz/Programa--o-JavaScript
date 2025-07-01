// 7. Escreva um programa que simula um sistema de login. O usuário tem até 3 tentativas para acertar a senha correta. Se errar 3 vezes, o acesso é negado.

let tentativas = 1
let senhaCorreta = "123"

let senha = prompt('Digite a senha: ')

while(tentativas < 3 && senha != senhaCorreta) {
    senha = prompt('Digite a senha: ')
    tentativas++
}

console.log('Tentativas', tentativas)
if (senha == senhaCorreta) {
    console.log("Você acertou!!!")
} else {
    console.log("Acesso negado!")
}