// 9. Implementar um programa que some todos os números informados pelo usuário até que seja digitada a palavra “Fim”.

let soma = 0
let numero = ""

while(numero !== "Fim") {
    numero = prompt('Digite o número("Fim" para sair): ')

    if (numero !== "Fim"){
        soma += Number(numero)
    }
}

console.log(`Somatória: ${soma}`)