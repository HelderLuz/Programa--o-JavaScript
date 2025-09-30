const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map((numero) => {
  return numero * 23;
});

console.log(dobrados); // [2, 4, 6, 8, 10]
console.log(numeros);  // [1, 2, 3, 4, 5] (o original não é modificado)