const pessoas = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Bruno', idade: 30 },
    { nome: 'Carla', idade: 22 }
];

const nomes = pessoas.map(pessoa => pessoa.nome)
console.log(nomes)