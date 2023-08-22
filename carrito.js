const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const containerCarritoVacio = document.querySelector("#carrito-vacio");
const containerCarritoProductos = document.querySelector("#carrito-productos");
const containerCarritoAcciones = document.querySelector("#carrito-acciones");
const containerCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");


function cargarProductosCarrito () {
    if (productosEnCarrito) {

        containerCarritoVacio.classList.add("disabled");
        containerCarritoProductos.classList.remove("disabled");
        containerCarritoAcciones.classList.remove("disabled");
        containerCarritoComprado.classList.add("disabled");
    
        containerCarritoProductos.innerHTML = ""; //vacial el contenedor 
    
        //para que se muestren los productos
    
        productosEnCarrito.forEach(product => {
            const div = document.createElement("div");
            div.classList.add ("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-img" src="${product.imagen}" alt="${product.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${product.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${product.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${product.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${product.precio * product.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${product.id}"><i class="bi bi-trash"></i></button>
    
            `;
            containerCarritoProductos.appendChild(div);
        });
    
    
    
    
    }else {
        containerCarritoVacio.classList.remove("disabled");
        containerCarritoProductos.classList.add("disabled");
        containerCarritoAcciones.classList.add("disabled");
        containerCarritoComprado.classList.add("disabled");
    
    }
    actualizarBotonesEliminar();
}

cargarProductosCarrito ()

//Lo mismo que botones Agregar

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");  
  
    botonesEliminar.forEach (boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    }); 
  
}

function eliminarDelCarrito (e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(product => product.id === idBoton);

    
    productosEnCarrito.splice(index, 1);
    
    // Guardar la actualización en el Local Storage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

        
    // Actualizar la vista del carrito
    
    cargarProductosCarrito();
        
}
