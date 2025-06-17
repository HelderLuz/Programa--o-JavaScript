// 8. Implementar um programa que calcule a potência de um número utilizando uma estrutura de repetição. O programa deve solicitar ao usuário que informe a base e o expoente, ambos considerados como inteiros

let base = Number(prompt('Base:'))
let expo = Number(prompt('Expoente:'))
let potencia = 1

for (let i = 0; i < expo; i++) {
    potencia = potencia * base
}

console.log(`Potência: ${potencia}`)
