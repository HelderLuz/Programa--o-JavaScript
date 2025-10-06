// Crie uma função que receba um array de usuários e um id. A função deve usar find para retornar o objeto do usuário com o id correspondente. Se não encontrar, deve retornar a mensagem "Usuário não encontrado".
const usuarios = [
    { id: 1, nome: 'Alice' },
    { id: 2, nome: 'Bob' },
    { id: 3, nome: 'Charlie' }
];

function encontrarUsuario(usuarios, id) {
    const usuario = usuarios.find(usuario => usuario.id == id)
    // if (usuario !== undefined) {
    //     return usuario
    // }
    // return "Usuário não encontrado"
    return usuario ? usuario : "Usuário não encontrado"
}

console.log(encontrarUsuario(usuarios, 5))