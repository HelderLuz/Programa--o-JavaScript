const matriz = [
    [[1, 2, 3], [1, 2, 3], [1, 2, 3]],
    [[1, 2, 3], [1, 2, 3], [1, 2, 3]],
    [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
  ]
  
  for (let x = 0; x < matriz.length; x++) {
    for (let y = 0; y < matriz[x].length; y++) {
        for (let z = 0; z < matriz[x][y].length; z++) {
            console.log(`Elemento [${x}][${y}][${z}]: ${matriz[x][y][z]}`)
        }
    }
  }