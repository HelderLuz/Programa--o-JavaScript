// Faça uma função que conte o número de pessoas que votaram em uma eleição. Ele deve receber um vetor de objetos que possui dois atributos: “nome” e “votou”. “votou” deve possuir valor “true” ou “false”.

const eleitores = [
    { nome: 'Ana Silva', votou: true },
    { nome: 'Bruno Santos', votou: false },
    { nome: 'Carla Souza', votou: true },
    { nome: 'Diego Lima', votou: true },
    { nome: 'Eduarda Alves', votou: false },
    { nome: 'Felipe Rocha', votou: true },
    { nome: 'Gustavo Pereira', votou: false },
    { nome: 'Helena Costa', votou: true },
    { nome: 'Igor Martins', votou: false },
    { nome: 'Júlia Oliveira', votou: true }
];

console.log(eleitores)

const numeroVotantes = eleitores.reduce((acumulador, eleitor) => {
    if (eleitor.votou) {
        return acumulador + 1;
    }
    return acumulador;
}, 0)

const numeroVotantes2 = eleitores.reduce((acumulador, eleitor) =>  acumulador + (eleitor.votou ? 1 : 0), 0)

console.log(numeroVotantes2)