const turma = [
    { nome: "Ana", nota: 9, cidade: "Recife" },
    { nome: "Beto", nota: 7, cidade: "Olinda" },
    { nome: "Carla", nota: 10, cidade: "Recife" },
  ];
  
turma.push({
    nome: "Valda",
    nota: 8.5,
    cidade: "Arapongas"
})

for(let i = 0; i < turma.length; i++){
    console.log(`O aluno ${turma[i].nome} tirou nota ${turma[i].nota}.`);
}