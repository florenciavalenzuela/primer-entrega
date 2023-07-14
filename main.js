alert('Bienvenido a Adict games');

const productos = [
  { nombre: "consola", precio: 15000, cantidad: 5 },
  { nombre: "silla gamer", precio: 60000, cantidad: 5 },
  { nombre: "silla gamer Xr", precio: 65000, cantidad: 4 },
  { nombre: "mouse gamer", precio: 12000, cantidad: 12 },
  { nombre: "mouse inalambrico", precio: 8000, cantidad: 12 },
  { nombre: "teclado genius", precio: 6000, cantidad: 8 },
  { nombre: "teclado gamemax", precio: 6700, cantidad: 8 },
  { nombre: "auriculares", precio: 3000, cantidad: 15 },
  { nombre: "auriculares genius", precio: 5000, cantidad: 10 },
  { nombre: "placa video", precio: 35000, cantidad: 20 }
];


function sumarIva(precio) {
    return precio * 1.21;
  }
  
  let ticket = "";
  let total = 0;
  let opcion = 'si';
  
  do {
    const producto = prompt('Ingrese el nombre del producto');
  
    
    const ProductoEncontrado = productos.find((p) => p.nombre === producto);
  
    if (ProductoEncontrado) {
      let cantidad = parseInt(prompt("Ingrese la cantidad"));
  
      while (cantidad <= 0) {
        cantidad = parseInt(prompt('Cantidad inválida, ingrese otra'));
      }
  
      const subtotal = cantidad * ProductoEncontrado.precio;
      const subtotalConIva = sumarIva(subtotal);
      ticket += `producto: ${producto} \n precio unitario: $${ProductoEncontrado.precio} \n cantidad: ${cantidad} \n subtotal: $${subtotalConIva} \n\n`;
      total += subtotalConIva;
  
      opcion = prompt("Desea ingresar otro item? (si/no)");
    } else {
      opcion = prompt("Producto no encontrado. Desea ingresar otro item? (si/no)");
    }
  } while (opcion === 'si');
  
  console.log(ticket);
  console.log('Total:', total);



// Realmente no me salio como queria, mi idea era poder agregar todo a un carrito de compras.
// Que aparezca la lista de los productos y que la persona pueda ver que productos elegir, ademas cuanto se le cobraba del iva. 
// No se si me podras explicar eso con algun ejemplo por favor! 