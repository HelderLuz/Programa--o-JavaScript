const departamentos = [{
    nome: 'marketing',
    funcionarios: [
        { nome: 'João', salario: 2100 }, { nome: 'Maria', salario: 3100},
        { nome: 'José', salario: 3200}
    ]
}]

// - Adicione pelo menos 2 departamentos e 3 funcionários em cada um.
departamentos.push({
    nome: 'rh',
    funcionarios: [
        { nome: 'Pedro', salario: 150000 }, { nome: 'Ana', salario: 1000},
        { nome: 'José', salario: 3000}
    ]
})
departamentos.push({
    nome: 'financeiro',
    funcionarios: [
        { nome: 'Marcos', salario: 5500 }, { nome: 'Josefina', salario: 22000},
        { nome: 'Julia', salario: 7800}
    ]
})

// - Calcule a soma dos salários de todos os funcionários.
let soma = 0
for (const { funcionarios } of departamentos) {
    for (const { salario } of funcionarios) {
        soma += salario
    }
}
console.log(`Soma dos salários: ${soma}`)
// - Liste o nome do departamento com a média salarial mais alta.
const depMediaSalarialAlta = {
    nome: '',
    mediaSalarial: 0
}

for (const { nome, funcionarios } of departamentos) {
    let mediaSalarial = 0
    for (const { salario } of funcionarios) {
        mediaSalarial += salario /funcionarios.length
    }
    if (mediaSalarial > depMediaSalarialAlta.mediaSalarial) {
        depMediaSalarialAlta.nome = nome,
        depMediaSalarialAlta.mediaSalarial = mediaSalarial
    }
}
const { mediaSalarial, nome } = depMediaSalarialAlta
console.log(`Departamento com a média salarial mais alta é ${nome}, com média de ${mediaSalarial}`)