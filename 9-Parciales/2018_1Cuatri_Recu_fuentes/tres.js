function mostrar()
{
    let precio;
    let descuento;
    let precioFinal;

    precio = parseInt(prompt("Por favor, ingrese el precio del producto."));

    descuento = parseInt(prompt("Por favor, ingrese el descuento deseado, por ejemplo:'0.20' para un descuento del 20%."));

    precioFinal = precio - (precio * descuento);

    document.getElementById().value = precioFinal;


}
