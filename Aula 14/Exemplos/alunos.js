const alunos = [
    { nome: "Leo", idade: 18, cidade:'Recife' },
    { nome: "Maria", idade: 19, cidade:'Recife' },
    { nome: "José", idade: 20, cidade:'Recife' },
  ];
  
  for (const aluno of alunos) {
    const { nome, idade, cidade } = aluno

    console.log(`Nome: ${nome} Idade: ${idade} Cidade: ${cidade}`)
   
  }