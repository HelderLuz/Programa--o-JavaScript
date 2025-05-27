// Implementar um programa que, dado um valor de lado informado pelo usuário,calcule a área do quadrado e formate a saída para que o valor seja apresentado com duas casas decimais.

let lado = Number(prompt('Lado do quadrado: '))

let area = lado * lado

console.log(`Área do quadrado é ${area.toFixed(2)}`)