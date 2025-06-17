// 6. Implementar um programa que, dado um número inteiro n informado pelo usuário, calcule a média dos n primeiros números naturais. Considere que os números naturais começam em 0

let n = Number(prompt('Digite N: '))
let soma = 0

for (let i = 0; i < n; i++){
    soma = soma + i
}

let media = soma / n

console.log('Média:', media)