// Meu Livro Favorito:

// Crie um objeto chamado livro que represente seu livro favorito.
// Ele deve ter as propriedades titulo (string), autor (string), ano (number), paginas (number) e genero (string).
// Imprima no console o título e o autor do livro.

// 3. Expandindo o Livro:
// Adicione uma nova propriedade ao objeto livro chamada editora (string).
// Altere o número de páginas para um novo valor.
// Imprima o objeto livro completo no console.

// 4. Descrevendo o Livro:
// Adicione um método chamado descrever ao objeto livro.
// Este método deve imprimir no console uma string formatada como: "O livro [TÍTULO] de [AUTOR] tem [PAGINAS] páginas."
// Chame o método livro.descrever().

const livro = {
    titulo: 'Como Matei Minha Querida Família',
    autor: 'Bella Mackie',
    ano: 2023,
    paginas: 256,
    genero: 'Humor ácido',
    descrever: function() {   
        console.log(`Título: ${this.titulo} | Autor: ${this.autor} \nAno: ${this.ano} | Nº páginas: ${this.paginas} Gênero: ${this.genero} \nEditora: ${this.editora}`)
    }
}
livro['editora'] = 'Darkside Books'
livro.paginas = 300

livro.descrever()

