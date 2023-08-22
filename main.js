// GALERIA DE IMAGENES //
const contenedorProducto = document.getElementById('contenedor-productos');
const product = contenedorProducto.querySelectorAll('.producto');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
let translateValue = 0;

function slideTo(index) {
  translateValue = -index * product[0].offsetWidth;
  contenedorProducto.style.transform = `translateX(${translateValue}px)`;
  currentIndex = index;
}

function nextSlide() {
  if (currentIndex < product.length - 1) {
    slideTo(currentIndex + 1);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    slideTo(currentIndex - 1);
  }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
// FIN GALERIA //

const productos = [
  {
    id: "teclado-01",
    titulo: "teclado mecanico gamer",
    imagen: "./Imagenes/teclado mecanico gamer.webp",
    categoria:{
      nombre: "teclados",
      id: "teclados"
    },
    precio: 4500,
  },

  {
    id: "teclado-01",
    titulo: "teclado mecanico gamer",
    imagen: "./Imagenes/teclado mecanico gamer.webp",
    categoria:{
      nombre: "teclados",
      id: "teclados"
    },
    precio: 4500,
  },

  {
    id: "teclado-01",
    titulo: "teclado mecanico gamer",
    imagen: "./Imagenes/teclado mecanico gamer.webp",
    categoria:{
      nombre: "teclados",
      id: "teclados"
    },
    precio: 4500,
  },

  {
    id: "teclado-01",
    titulo: "teclado mecanico gamer",
    imagen: "./Imagenes/teclado mecanico gamer.webp",
    categoria:{
      nombre: "teclados",
      id: "teclados"
    },
    precio: 4500,
  },

  {
    id: "teclado-01",
    titulo: "teclado mecanico gamer",
    imagen: "./Imagenes/teclado mecanico gamer.webp",
    categoria:{
      nombre: "teclados",
      id: "teclados"
    },
    precio: 4500,
  },

  {
    id: "teclado-01",
    titulo: "teclado mecanico gamer",
    imagen: "./Imagenes/teclado mecanico gamer.webp",
    categoria:{
      nombre: "teclados",
      id: "teclados"
    },
    precio: 4500,
  },

  {
    id: "teclado-01",
    titulo: "teclado mecanico gamer",
    imagen: "./Imagenes/teclado mecanico gamer.webp",
    categoria:{
      nombre: "teclados",
      id: "teclados"
    },
    precio: 4500,
  },


]

//* DOM *//
const contenedorProductos= document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".category-buttons");
const tituloPrincipal = document.querySelectorAll("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos () {

  contenedorProductos.innerHTML = "" ;

  productosElegidos.forEach(producto => {

    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
      <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
      </div>       

    `;
    contenedorProductos.append(div);
  })

  actualizarBotonesAgregar () ;
}

 
botonesCategorias.forEach(boton =>{
  boton.addEventListener("click", (e) => {
  
    botonesCategorias.forEach(boton => boton.classList.remove("active"));

    e.currentTarget.classList.add("active"); 

    if(e.currentTarget.id !="todos") {
      const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

      tituloPrincipal.innerText = productoCategoria.categoria.nombre;

    
      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
      cargarProductos(productosBoton);
    } else {
    tituloPrincipal.innerText = "Todos los productos";
    cargarProductos(productos);

  }

  })
});

function actualizarBotonesAgregar () {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito = [];

function agregarAlCarrito (e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productosfind(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad++;
  } else{
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}




// let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

// if (productosEnCarritoLS) {
//     productosEnCarrito = JSON.parse(productosEnCarritoLS);
//     actualizarNumerito();
// } else {
//     productosEnCarrito = [];
// }




// function agregarAlCarrito(e) {

//   Toastify({
//       text: "Producto agregado",
//       duration: 3000,
//       close: true,
//       gravity: "top", // `top` or `bottom`
//       position: "right", // `left`, `center` or `right`
//       stopOnFocus: true, // Prevents dismissing of toast on hover
//       style: {
//         background: "linear-gradient(to right, #4b33a8, #785ce9)",
//         borderRadius: "2rem",
//         textTransform: "uppercase",
//         fontSize: ".75rem"
//       },
//       offset: {
//           x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
//           y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
//         },
//       onClick: function(){} // Callback after click
//     }).showToast();

//   const idBoton = e.currentTarget.id;
//   const productoAgregado = productos.find(producto => producto.id === idBoton);

//   if(productosEnCarrito.some(producto => producto.id === idBoton)) {
//       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
//       productosEnCarrito[index].cantidad++;
//   } else {
//       productoAgregado.cantidad = 1;
//       productosEnCarrito.push(productoAgregado);
//   }

//   actualizarNumerito();

//   localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
// }

// function actualizarNumerito() {
//   let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
//   numerito.innerText = nuevoNumerito;
// }




//   { nombre: "consola", precio: 15000, cantidad: 5 },
//   { nombre: "silla gamer", precio: 60000, cantidad: 5 },
//   { nombre: "silla gamer Xr", precio: 65000, cantidad: 4 },
//   { nombre: "mouse gamer", precio: 12000, cantidad: 12 },
//   { nombre: "mouse inalambrico", precio: 8000, cantidad: 12 },
//   { nombre: "teclado genius", precio: 6000, cantidad: 8 },
//   { nombre: "teclado gamemax", precio: 6700, cantidad: 8 },
//   { nombre: "auriculares", precio: 3000, cantidad: 15 },
//   { nombre: "auriculares genius", precio: 5000, cantidad: 10 },
//   { nombre: "placa video", precio: 35000, cantidad: 20 }
// ];


// function sumarIva(precio) {
//     return precio * 1.21;
//   }
  
//   let ticket = "";
//   let total = 0;
//   let opcion = 'si';
  
//   do {
//     const producto = prompt('Ingrese el nombre del producto');
  
    
//     const ProductoEncontrado = productos.find((p) => p.nombre === producto);
  
//     if (ProductoEncontrado) {
//       let cantidad = parseInt(prompt("Ingrese la cantidad"));
  
//       while (cantidad <= 0) {
//         cantidad = parseInt(prompt('Cantidad inválida, ingrese otra'));
//       }
  
//       const subtotal = cantidad * ProductoEncontrado.precio;
//       const subtotalConIva = sumarIva(subtotal);
//       ticket += `producto: ${producto} \n precio unitario: $${ProductoEncontrado.precio} \n cantidad: ${cantidad} \n subtotal: $${subtotalConIva} \n\n`;
//       total += subtotalConIva;
  
//       opcion = prompt("Desea ingresar otro item? (si/no)");
//     } else {
//       opcion = prompt("Producto no encontrado. Desea ingresar otro item? (si/no)");
//     }
//   } while (opcion === 'si');
  
//   console.log(ticket);
//   console.log('Total:', total);



// Realmente no me salio como queria, mi idea era poder agregar todo a un carrito de compras.
// Que aparezca la lista de los productos y que la persona pueda ver que productos elegir, ademas cuanto se le cobraba del iva. 
// No se si me podras explicar eso con algun ejemplo por favor! 