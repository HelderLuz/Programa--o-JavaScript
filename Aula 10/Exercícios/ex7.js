// Implementar uma função que calcule o Índice de Massa Corpórea(IMC), dados o peso e a altura informados pelo usuário.
// Fórmula do IMC: peso / (altura * altura)

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(3)
}

let peso = Number(prompt('Digite o peso'))
let altura = Number(prompt('Digite a altura'))

let imc = calcularIMC(peso, altura)
console.log(imc)

// Crie uma função chamada classificarIMC que receba o IMC e retorne a classificação:
// Abaixo do peso: IMC < 18.5
// Peso normal: 18.5 <= IMC < 25
// Sobrepeso: 25 <= IMC < 30
// Obesidade: IMC >= 30

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso"
    } 
    if (imc < 25) {
        return "Peso normal"
    } 
    if (imc < 30) {
        return "Sobrepeso"
    }
    return "Obesidade"  
}

console.log(classificarIMC(imc))