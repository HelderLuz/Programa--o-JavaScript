// Calcule o valor total de uma compra com 3 produtos:
// Produto 1: R$ 45,00
// Produto 2: R$ 30,00
// Produto 3: R$ 25,00
// Adicione 10% de imposto ao valor total

let prod1 = 45
let prod2 = 30
let prod3 = 25

let somaProdutos = prod1 + prod2 + prod3
let imposto = somaProdutos * 0.1
console.log(`Imposto: R\$${imposto}`)

console.log(`Valor total: R\$${somaProdutos + imposto}`)