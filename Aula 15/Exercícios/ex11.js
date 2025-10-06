// Dado um array de produtos, crie uma função que filtre os produtos que custam mais de R$ 50 e retorne um novo array apenas com os nomes desses produtos.

const produtos = [
    { nome: 'Teclado', preco: 120 }, { nome: 'Mouse', preco: 45 }, { nome: 'Monitor', preco: 750 }, { nome: 'Cadeira Gamer', preco: 1500 }, { nome: 'Mousepad', preco: 30 }
];

const nomesProdutos = produtos
                        .filter(produto => produto.preco > 50)
                        .map(produto => produto.nome)

console.log(nomesProdutos)

//12. Dado o array de produtos acima, use reduce para calcular o valor total de todos os produtos no carrinho.

const valorTotal = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0)
console.log(valorTotal)