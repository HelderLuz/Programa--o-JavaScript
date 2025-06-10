// 4. Crie um programa que leia a temperatura em graus Celsius e informe se está 
// "Frio" (abaixo de 18°C), 
// "Agradável" (entre 18°C e 26°C) ou "Quente" (acima de 26°C).

let temperatura = Number(prompt('Temperatura (ºC): '))

if (temperatura < 18){
    console.log('Frio')
} else if (temperatura <= 26) {
    console.log('Agradável')
} else {
    console.log('Quente')
}
