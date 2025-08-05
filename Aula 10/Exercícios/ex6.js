// Escreva uma função chamada compararNumeros que receba dois números e retorne true se eles forem iguais e a diferença entre eles se forem diferentes.

function compararNumeros(num1, num2) {
    if (num1 === num2){
        return true
    } else {
        return Math.abs(num1 - num2)
    }
}

console.log(compararNumeros(5, 5))
console.log(compararNumeros(5, 10))
console.log(compararNumeros(15, 10))