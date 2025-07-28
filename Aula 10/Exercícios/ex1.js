/**
 * Calcula a área do triangulo
 * @param {number} base - medida da base do triangulo 
 * @param {number} altura - medida da altura do triangulo
 * @returns {number} a área do triangulo
 * @example
 * // Retorna o número 6
 * calcularAreaTriangulo(3, 4)
 */
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2
}

let base = Number(prompt('Digite a base do triangulo'))
let altura = Number(prompt('Digite a altura do triangulo'))

console.log(`Área do triangulo é: ${calcularAreaTriangulo(base, altura)}`)