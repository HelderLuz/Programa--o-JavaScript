const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001,
    // Um método do objeto 'carro'
    ligar: function () {
      console.log(`O ${this.marca} ${this.modelo} de ${2025 - this.ano} anos está ligando... vrum vrum!`);
    },
  };
  
  carro.ligar(); // Executando o método
  console.log(carro.marca)
  console.log(carro["modelo"])