const alunos = [
    {
        nome: 'João', idade: 20,
        disciplinas: [
            { nome: 'Matemática', nota: 10 }, { nome: 'Português', nota: 7 }
        ]
    }
]

alunos.push({
    nome: 'Maria', idade: 19, 
    disciplinas: [
        { nome: 'Matemática', nota: 9 },
        { nome: 'Português', nota: 9}
    ]
})

for (const { nome, idade, disciplinas } of alunos) {
    console.log(`Nome: ${nome} | Idade: ${idade}`)
    let media = 0
    console.log('Disciplinas:')
    for (const disciplina of disciplinas) {
        media += disciplina.nota / disciplinas.length
        console.log(`Nome: ${disciplina.nome} Nota: ${disciplina.nota}`)
    }
    console.log(`Média das disciplinas: ${media}\n`)
}