// fibonnaci

let num = Number(prompt('Digite o número de termos: '))

let atual = 0
let prox = 1

for (let i = 0; i < num; i++) {
    console.log(atual)

    let aux = atual
    atual = prox
    prox = prox + aux
}