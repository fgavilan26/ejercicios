let productos = [
  {
    nombre: "Auriculares inalámbricos",
    descripcion: "Sonido envolvente y batería de 20 horas.",
    precio: "$59.99"
  },
  {
    nombre: "Smartwatch deportivo",
    descripcion: "Ideal para entrenamientos y seguimiento de salud.",
    precio: "$89.99"
  },
  {
    nombre: "Teclado mecánico RGB",
    descripcion: "Retroiluminación personalizable y switches azules.",
    precio: "$69.99"
  }
];

let indiceProducto = 0

let agregarProducto = function () {
  if(indiceProducto < productos.length) {
    let producto = productos[indiceProducto]

    let card = document.createElement("div")
    card.className = "card"

    let cardBody = document.createElement("div")
    cardBody.className = "card-body"

    let titulo = document.createElement("h5")
    titulo.className = "card-title"
    titulo.textContent = producto.nombre

    let descripcion = document.createElement("p")
    descripcion.className = "card-text"
    descripcion.textContent = producto.descripcion

    let precio = document.createElement("p")
    precio.className = "card-text"
    precio.textContent = producto.precio

    cardBody.appendChild(titulo)
    cardBody.appendChild(descripcion)
    cardBody.appendChild(precio)
    card.appendChild(cardBody)

    document.getElementById("contenedorTarjetas").appendChild(card)

    indiceProducto++

  } else {
    console.log("Ya se agregaron todos los productos")
  }
}

let main = function() {
  let butAgregar = document.getElementById("but_Agregar")
  butAgregar.addEventListener("click", agregarProducto)
}

main()