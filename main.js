
// let producto;
// let precio;
// let total = 0;
// let opcion;
// let ticket = `` ;

// alert('Bienvenido a Adict games');
// let usuario = prompt('Ingrese su mail');
// let contrasenia = prompt('Ingrese su contraseña');
// alert ('Usuario y contraseña validos');

// do{
//     producto = prompt('Ingrese el nombre del producto');
//     precio = prompt('Ingrese el precio');

//     while (precio < 100) { ///Mientras el precio este mal le voy a pedir que ingrese otro
//         precio = parseInt(prompt('Precio invalido, ingrese otro'));
//     }

//     let cantidad = parseInt(prompt("Ingrese cantidad"));
    
//     while (cantidad <= 0) { ///mientras la cantidad sea menor o igual a 0, le pedimos que la vuelva a ingresar
//         cantidad = parseInt(prompt('Cantidad invalida, ingrese otra'));
//     } 
    
//     ticket =  ticket + `producto: ${producto} \n precio unitario: $${precio} \n cantidad: ${cantidad} \n subtotal: $${cantidad * precio} \n\n` ;
//     total = total + cantidad * precio;

//     opcion = prompt("Desea ingresar otro item?"); ///le pregunto si desea ingresar otro item, asi vuelvo a iterar o terminar el bucle
    
// }  while (opcion == 'si');
    
// alert(`${ticket} El total para pagar es de: $${total}`);
//     //alert('El total para pagar ' + ' es de ' + total);
    
//     alert("Gracias por su compra, sera enviado a su mail el seguimiento del producto")


 
// let productos = [
//     { nombre: "consola ", precio:15.000},
//     { nombre: "silla gamer ", precio:60.000},
//     { nombre: "silla gamer Xr", precio:65.000},
//     { nombre: "mouse gamer ", precio:12.000},
//     { nombre: "mouse inalambrico ", precio:8.000},
//     { nombre: "teclado genius", precio:6.000},
//     { nombre: "teclado gamemax", precio:6.700},
//     { nombre: "auriculares", precio:3.000},
//     { nombre: "auriculares genius", precio:5.000},
//     { nombre: "placa video", precio:35.000},
//



//   carrito.push(producto);

//   console.log('Producto agregado al carrito:', producto);
// }

// let agregarMas = true;

// while (agregarMas) {
//   agregarProducto();
  
//   let confirmacion = confirm('¿Desea agregar más productos al carrito?');
//   agregarMas = confirmacion;
// }

// console.log('Carrito:', carrito);


// function agregarProducto() {
//     let nombre = prompt('Ingrese el nombre del producto:');
//     let cantidad = parseInt(prompt('Ingrese la cantidad del producto:'));
//     let precio = 0;
  
//     // Buscar el producto en la lista predefinida
//     let productoEncontrado = productos.find(producto => producto.nombre === nombre);
  
//     if (productoEncontrado) {
//       precio = productoEncontrado.precio;
//       cantidad = productoEncontrado.cantidad;
//     } else {
//       alert('El producto ingresado no se encuentra.');
//       return; // Salir de la función si el producto no se encuentra
//     }

//     let producto = [
       
//     ];
  
//     carrito.push(producto);
  
//     console.log('Producto agregado al carrito:', producto);
// }


const carrito = [];

const productos = [
    { nombre: "consola ", precio: 15.000 , cantidad: 5 },
    { nombre: "silla gamer ", precio:60.000 , cantidad: 3},
    { nombre: "silla gamer Xr", precio:65.000 , cantidad: 3},
    { nombre: "mouse gamer ", precio:12.000 , cantidad: 8},
    { nombre: "mouse inalambrico ", precio:8.000 , cantidad: 8},
    { nombre: "teclado genius", precio:6.000 , cantidad: 9},
    { nombre: "teclado gamemax", precio:6.700 , cantidad: 10},
    { nombre: "auriculares", precio:3.000 , cantidad: 4},
    { nombre: "auriculares genius", precio:5.000 , cantidad: 6},
    { nombre: "placa video", precio:35.000 , cantidad: 12}
];

function agregarProducto() {
    let nombre = prompt('Ingrese el nombre del producto:');
    let cantidad = parseInt(prompt('Ingrese la cantidad del producto:'));

    let productoElegido = productos.find(producto => producto.nombre === nombre);
    
    if (productoElegido) {
        let precio = productoElegido.precio;
        let producto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };
        carrito.push(producto);
        console.log('Producto agregado al carrito:', producto);
    } else {
        alert('El producto ingresado no se encuentra.');
        return; // Salir de la función si el producto no se encuentra
    }

    agregarProducto();
}
