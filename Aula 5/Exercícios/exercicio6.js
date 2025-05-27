// Implementar um programa que, dados dois valores de entrada informados pelo usuário, troque os valores entre as variáveis iniciais.

let var1 = prompt()
let var2 = prompt()

let aux = var1
var1 = var2
var2 = aux

console.log('Var1:', var1)
console.log('Var2:', var2)