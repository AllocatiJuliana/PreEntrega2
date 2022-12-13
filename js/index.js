//filtrar objetos con oferta true

const result = productos.filter(productos => productos.oferta == true);

console.log(result);

//sacar el 21% 

for (const producto of productos) {
    if (producto.oferta == true) {
        producto.precio = producto.precio / 1.21
    }
}

//ordenar alfabeticamente por nombre de "producto"

const ordenar = [...productos].sort((a, b) => {
    if (a.producto < b.producto) {
        return -1
    } else if (a.producto > b.producto) {
        return 1
    } else {
        return 0
    }
})

console.log(ordenar)

//preguntar al usuario si quiere ver las ofertas, en el caso de que quiera, mostrar en consola

let verOfertas = confirm("Quiere ver las ofertas?")

if (verOfertas == true) {
    console.log(productos.filter(productos => productos.oferta == true))
}

//mediante un prompt, buscar productos con nombre del "Producto" y mostrarlo en un alert con nombre y precio.

let buscarProducto = prompt("Que producto desea buscar?")

let busqueda = (productos.find(productos => productos.producto == buscarProducto))

alert(busqueda.producto + " " + "$" + busqueda.precio)

