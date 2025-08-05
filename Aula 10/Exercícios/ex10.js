// Escreva uma função chamada calcularDesconto que receba o valor de uma compra e retorne:
// 10% de desconto se valor >= 100
// 5% de desconto se valor >= 50
// Sem desconto se valor < 50

function calcularDesconto(valor) {
    if (valor >= 100) {
        return valor * 0.1
    }
    if (valor >= 50) {
        return valor * 0.05
    }

    return 0
}

console.log(calcularDesconto(110))
console.log(calcularDesconto(55))
console.log(calcularDesconto(40))