// Crie uma função executarCallback(callback) que recebe uma função como argumento e a executa. Teste-a passando uma função que imprime "Callback executado!".

function executarCallback(funcaoCallback) {
    funcaoCallback('Callback executado!')
}

executarCallback((mensagem) => {
    console.log(mensagem)
})