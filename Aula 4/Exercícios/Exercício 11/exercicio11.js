// 11. Um investidor aplicou R$ 1.000,00 em uma poupança com rendimento de 0,5% ao mês. Calcule o valor total após 6 meses.

let valor = 1000.00
let percentual = 1.005 ** 6
valor = valor * percentual
console.log(`R\$${valor.toFixed(2)}`)