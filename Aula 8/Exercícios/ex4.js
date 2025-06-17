// 4. Implementar um programa que imprima a tabuada de um número informado pelo usuário (utilize prompt). O programa deve exibir os resultados das multiplicações desse número por valores de 0 até 10.

let num = Number(prompt('Número: '))

for (let i = 0; i <= 10; i++){
    let res = num * i;
    console.log(`${i} × ${num} = ${res}`)
}