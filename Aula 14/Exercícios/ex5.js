// 5. Lista de Compras:
// Crie um array chamado listaDeCompras.
// Este array deve conter pelo menos 3 objetos, onde cada objeto representa um item da compra e tem as propriedades produto (string), preco (number) e quantidade (number).

const listaDeCompras = [
    {
        nome: 'uva',
        preco: 3.59,
        quantidade: 25
    },
    {
        nome: 'teclado',
        preco: 289.99,
        quantidade: 3
    },
    {
        nome: 'mouse',
        preco: 79.99,
        quantidade: 5
    }
]

// console.log(listaDeCompras)

// 6. Total da Compra:
// Usando um laço (for...of), itere sobre a listaDeCompras.
// Calcule o custo total da compra (preço * quantidade de cada item) e armazene em uma variável total.
// Imprima o valor total no console.

let total = 0
for (const { preco, quantidade } of listaDeCompras) {
    total += preco * quantidade
}

console.log('Total da compra:', total)

// 7. Encontre o Produto:
// Crie uma função encontrarProduto(lista, nomeDoProduto).
// A função deve percorrer a lista e retornar o objeto do produto se encontrá-lo.
// Se não encontrar, deve retornar null.
// Teste a função buscando por um produto que existe e um que não existe.

function encontrarProduto(lista, nomeProduto) {
    for (const produto of lista) {
        if (nomeProduto.toLowerCase() == produto.nome.toLowerCase()) {
            return produto
        }
    }

    return null
}

function imprimirProdutos(lista) {
    for (const { nome, preco, quantidade } of lista) {
        console.log(`Produto: ${nome}, Preço: ${preco}, Qtd: ${quantidade}`)
    }
}

console.log(encontrarProduto(listaDeCompras, 'teclado'))
console.log(encontrarProduto(listaDeCompras, 'uva'))
console.log(encontrarProduto(listaDeCompras, 'banana'))

imprimirProdutos(listaDeCompras)

// Carrinho Elegante:
// Itere novamente sobre a listaDeCompras usando for...of.
// Dentro do laço, use a desestruturação para extrair produto, preco e quantidade em variáveis separadas.
// Imprima uma mensagem para cada item, como: "Produto: [PRODUTO], Preço: R$ [PRECO], Qtd: [QUANTIDADE]".