
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = parseFloat(prompt("Ingrese el ancho del rectangulo: "));
    largo = parseFloat(prompt("Ingrese el largo del rectangulo: "));

    perimetro = largo + largo + ancho + ancho;

    alert("El perimetro del rectangulo es de  " + perimetro );


}
