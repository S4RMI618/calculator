// EXERCISE 5
// Crea una función que genere 100 números aleatorios entre 1 y 1000 que no se repitan
// y luego mostrarlos por pantalla

function generarNumerosAleatorios() {
    let numeros = new Set();
    while (numeros.size < 100) {
      numeros.add(Math.floor(Math.random() * 1000) + 1);
    }
    return numeros;
  }
  let numerosAleatorios = generarNumerosAleatorios();
  numerosAleatorios.forEach(numero => console.log(numero));