// EXERCISE 2

function precioConIva(precio, iva = 19) {
    const precioConIva = precio + (precio * iva / 100)
    return precioConIva;
}

console.log(precioConIva(8000))