function mostrar()
{
    let precio;
    let descuento;
    let precioFinal;

    precio = parseInt(prompt("Por favor, ingrese el precio del producto."));

    descuento = parseInt(prompt("Por favor, ingrese el descuento deseado, por ejemplo: 20%."));

    precioFinal = precio - (precio * descuento / 100);

    document.getElementById("elPrecioFinal").value = precioFinal;

}
