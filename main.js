
let producto;
let precio;
let total = 0;
let opcion;
let ticket = `` ;

alert('Bienvenido a Adict games');
let usuario = prompt('Ingrese su mail');
let contrasenia = prompt('Ingrese su contraseña');
alert ('Usuario y contraseña validos');

do{
    producto = prompt('Ingrese el nombre del producto');
    precio = prompt('Ingrese el precio');

    while (precio < 100) { ///Mientras el precio este mal le voy a pedir que ingrese otro
        precio = parseInt(prompt('Precio invalido, ingrese otro'));
    }

    let cantidad = parseInt(prompt("Ingrese cantidad"));
    
    while (cantidad <= 0) { ///mientras la cantidad sea menor o igual a 0, le pedimos que la vuelva a ingresar
        cantidad = parseInt(prompt('Cantidad invalida, ingrese otra'));
    } 
    
    ticket =  ticket + `producto: ${producto} \n precio unitario: $${precio} \n cantidad: ${cantidad} \n subtotal: $${cantidad * precio} \n\n` ;
    total = total + cantidad * precio;

    opcion = prompt("Desea ingresar otro item?"); ///le pregunto si desea ingresar otro item, asi vuelvo a iterar o terminar el bucle
    
}  while (opcion == 'si');
    
alert(`${ticket} El total para pagar es de: $${total}`);
    //alert('El total para pagar ' + ' es de ' + total);
    
    alert("Gracias por su compra, sera enviado a su mail el seguimiento del producto")


