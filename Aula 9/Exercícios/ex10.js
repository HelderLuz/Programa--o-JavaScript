// 10. Faça um programa que utilize um laço while para exibir um menu de opções ao usuário (ex: 1 - Olá, 2 - Tchau, 3 - Sair). Use switch para tratar cada opção. O programa só termina quando o usuário escolher a opção "Sair".

let opcao = 0

while(opcao !== 3) {
    console.log('1. Olá')
    console.log('2. Tchau')
    console.log('3. Sair')
    opcao = Number(prompt('Digite a opção: '))
    switch(opcao) {
        case 1:
            console.log('Olá')
            break
        case 2:
            console.log('Tchau!')
            break
        case 3:
            console.log('Saindo...')
            break;
        default:
            console.log('Opção inválida')
            break;
    }
}