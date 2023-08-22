// PRODUCTOS
const productos = [
  {
      id: "consola B&N",
      titulo: "consola B&N",
      imagen: "./Imagenes/consola.webp",
      categoria: {
          nombre: "Consolas",
          id: "consolas"
      },
      precio: 3500

  },

  {
      id: "consola negra",
      titulo: "consola negra",
      imagen: "./Imagenes/consola-negra.webp",
      categoria: {
          nombre: "Consolas",
          id: "consolas"
      },
      precio: 4000

  },

  {
      id: "consola blanca",
      titulo: "consola blanca",
      imagen: "./Imagenes/consola-blanca.webp",
      categoria: {
          nombre: "Consolas",
          id: "consolas"
      },
      precio: 4000

  },

  {
      id: "control",
      titulo: "control",
      imagen: "./Imagenes/control.webp",
      categoria: {
          nombre: "Consolas",
          id: "consolas"
      },
      precio: 5000

  },

  // JUEGOS

  {
      id: "juego 01",
      titulo: "juego 01",
      imagen: "./Imagenes/juego1.webp",
      categoria: {
          nombre: "Juegos",
          id: "juegos"
      },
      precio: 9000

  },

  {
      id: "juego 02",
      titulo: "juego 02",
      imagen: "./Imagenes/juego2.webp",
      categoria: {
          nombre: "Juegos",
          id: "juegos"
      },
      precio: 9000

  },

  {
      id: "juego 03",
      titulo: "juego 03",
      imagen: "./Imagenes/juego3.webp",
      categoria: {
          nombre: "Juegos",
          id: "juegos"
      },
      precio: 9000

  },

  // ACCESORIOS

  {
      id: "auricular C",
      titulo: "auricular celeste",
      imagen: "./Imagenes/auricular-celeste.webp",
      categoria: {
          nombre: "Accesorios",
          id: "accesorios"
      },
      precio: 6000

  },

  {
      id: "auricular N",
      titulo: "auricular negro",
      imagen: "./Imagenes/auricular-negro.webp",
      categoria: {
          nombre: "Accesorios",
          id: "accesorios"
      },
      precio: 6000

  },

  {
      id: "mouse",
      titulo: "mouse negro",
      imagen: "./Imagenes/mouse-negro.webp",
      categoria: {
          nombre: "Accesorios",
          id: "accesorios"
      },
      precio: 7000

  },

  {
      id: "teclado gamer",
      titulo: "teclado gamer",
      imagen: "./Imagenes/teclado-gamer.webp",
      categoria: {
          nombre: "Accesorios",
          id: "accesorios"
      },
      precio: 12000

  },

  {
      id: "teclado",
      titulo: "teclado color",
      imagen: "./Imagenes/teclado-color.webp",
      categoria: {
          nombre: "Accesorios",
          id: "accesorios"
      },
      precio: 12000

  },

  //Sillas Gamer

  {
      id: "Silla Gamer N",
      titulo: "silla N",
      imagen: "./Imagenes/silla-gamer-negra.webp",
      categoria: {
          nombre: "Sillas Gamer",
          id: "sillas"
      },
      precio: 80000

  },

  {
      id: "Sillas Gamer NJ",
      titulo: "Silla NJ",
      imagen: "./Imagenes/silla-gamer-naranja.webp",
      categoria: {
          nombre: "Sillas Gamer",
          id: "sillas"
      },
      precio: 80000
  },
  
  

]

//  DOM
const contenedorProductos = document.querySelector("#contenedor-todos-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal-dos"); 
let botonesAgregar = document.querySelectorAll(".product-agregar");  
const numerito = document.querySelector("#numerito");
// FIN DOM 

function cargarProductos (productosElegidos) {

  contenedorProductos.innerHTML = "";  //vacia el contenedor productos

  productosElegidos.forEach(product => {
      const div = document.createElement("div"); 
      div.classList.add("products");
      div.innerHTML = ` 
          <img  class="product-img" src="${product.imagen}" alt="${product.titulo}">
          <div class="product-detalles">

              <h3 class="product-titulo"> ${product.titulo} </h3>
              <p class="product-precio">$${product.precio}</p>
              <button class="product-agregar" id= "${product.id }">Agregar</button>
          </div>
      `;

      contenedorProductos.append(div);

  })
  actualizarBotonesAgregar();

}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

      botonesCategorias.forEach(boton => boton.classList.remove("active"));

      e.currentTarget.classList.add("active");
      
      if (e.currentTarget.id != "todos") {
          const productoCategoria = productos.filter(product => product.categoria.id === e.currentTarget.id); 
          tituloPrincipal.innerText = productoCategoria[0].categoria.nombre;

          
          const productosBoton = productos.filter(product => product.categoria.id === e.currentTarget.id);
          cargarProductos(productosBoton);
      } else {
          tituloPrincipal.innerText = "Todos los productos";
          cargarProductos(productos);

      }
  

  })  
});

console.log (botonesAgregar);

function actualizarBotonesAgregar () {
  let botonesAgregar = document.querySelectorAll(".product-agregar");  

  botonesAgregar.forEach (boton => {
      boton.addEventListener("click", agregarAlCarrito);
  });

}

let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (productosEnCarritoLS) {
  productosEnCarrito = productosEnCarritoLS;
  actualizarNumerito();
}else{
  productosEnCarrito = [];

}



function agregarAlCarrito (e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(product => product.id === idBoton);
  
  //para aumentar la cantidad del mismo producto

  if(productosEnCarrito.some(product => product.id === idBoton)) {
    const index =  productosEnCarrito.findIndex(product => product.id === idBoton); 
    productosEnCarrito[index].cantidad++;
  } else {
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);

  }

  actualizarNumerito();

  //para guardar en el LocalStorage

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

  
}

//para que agregar al carrito se actualice el numerito 

function actualizarNumerito () {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}
