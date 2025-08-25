// Implemente um programa que permita ao usuário adicionar elementos em um array até que decida parar. Em seguida, exiba o array resultante e sua quantidade de elementos.

const lista = []
let elemento = ""

while(elemento.toLowerCase() !== "sair") {
    elemento = prompt("Digite o conteúdo (ou 'sair' para finalizar): ")

    if (elemento.toLowerCase() !== "sair") {
        lista.push(elemento)
    }
}

console.log("Quantidade de elementos: ", lista.length)
console.log(lista)