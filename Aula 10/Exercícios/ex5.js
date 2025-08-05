// Escreva uma função chamada converterCelsiusParaFahrenheit que converta temperatura de Celsius para Fahrenheit. Fórmula: (c * 9/5) + 32

/**
 * Função que converte graus Celsius em graus Fahrenheit
 * @param {number} celsius - Temperatura em graus Celsius 
 * @returns {number} Retorna a temperatura em Fahrenheit
 */
function converterCelsiusParaFahrenheit(celsius) {
    return (celsius * 1.8) + 32
}

console.log(converterCelsiusParaFahrenheit(12.132).toFixed(3))