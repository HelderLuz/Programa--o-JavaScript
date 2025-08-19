const nomes = ['João', 'Maria', 'José'];

nomes.push('Ana'); // adiciona no final

console.log('Lista pós Ana')
for (const nome of nomes) {
    console.log(nome);
}

nomes.pop(); // remove e retorna o último

// remover primeira ocorrência de 'João'
const idx = nomes.indexOf('João');
if (idx !== -1) {
    nomes.splice(idx, 2);
}

console.log('Lista pós remoção João')
for (const nome of nomes) {
    console.log(nome);
}
