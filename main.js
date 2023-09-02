
//  DOM
 const contenedorProductos = document.querySelector("#contenedor-todos-productos");
 const botonesCategorias = document.querySelectorAll(".boton-categoria");
 const tituloPrincipal = document.querySelector("#titulo-principal-dos"); 
 let botonesAgregar = document.querySelectorAll(".product-agregar");  
 const numerito = document.querySelector("#numerito");
// FIN DOM 


let productos = [];

// Cargar productos desde el archivo JSON
fetch('./carrito.json')
  .then(resp => resp.json())
  .then((data) => {
    // Asignar los datos del JSON a la variable "productos"
    productos = data;
    // Llamar a la función cargarProductos con los datos
    cargarProductos(data);
  })
  .catch((error) => {
    console.error('Error al cargar productos:', error);
  });
  

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

  });
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

// function actualizarBotonesAgregar () {
//    let botonesAgregar = document.querySelectorAll(".product-agregar");  

//    botonesAgregar.forEach (boton => {
//        boton.addEventListener("click", agregarAlCarrito);
//    });

// }

function actualizarBotonesAgregar() {
  const botonesAgregar = document.querySelectorAll(".product-agregar");

  botonesAgregar.forEach((boton) => {
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

///para guardar en el LocalStorage

localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

// Mostrar mensaje emergente con Toastify
Toastify({
  text: "Producto agregado al carrito",
  backgroundColor: "white",
  duration: 3000,
  close: true
}).showToast();

}
  

function actualizarNumerito () {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}










