// Adicione um novo carro à lista.
// Exiba os carros fabricados após 2018.

const carros = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020 },
    { marca: "Honda", modelo: "Civic", ano: 2018 },
    { marca: "Ford", modelo: "Focus", ano: 2019 }
]

carros.push({
    marca: "Audi",
    modelo: "TT",
    ano: 2015
})

console.log(carros)

for (const { marca, modelo, ano } of carros) {
    if (ano > 2018) {
        console.log(`Marca: ${marca} | Modelo: ${modelo} | Ano: ${ano}`)
    }
}