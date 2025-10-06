// 14. Dado um array de alunos, ordene-o em ordem decrescente de notas.

const alunos = [
    { nome: 'Ana', nota: 8.5 },
    { nome: 'Bruno', nota: 9.2 },
    { nome: 'Carla', nota: 7.8 },
    { nome: 'Daniel', nota: 9.5 }
  ];

  const alunosOrdemNota = alunos.toSorted((a, b) => b.nota - a.nota)
  console.log(alunosOrdemNota)
