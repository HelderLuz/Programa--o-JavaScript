// Dado o array const numeros = [10, 21, 3, 8, 15];, use filter para criar um novo array contendo apenas os números maiores que 10. 

const numeros = [10, 21, 3, 8, 15]

const maiores10 = numeros.filter(numero => numero > 10)
console.log(maiores10)

// Usando o array de números do exercício anterior, use find para encontrar o primeiro número que é maior que 20.

const maior20 = numeros.find(numero => numero > 20)
console.log(maior20)