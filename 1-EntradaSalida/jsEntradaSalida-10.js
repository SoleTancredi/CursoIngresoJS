/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;

	importe = parseInt(document.getElementById("txtIdImporte").value);

	descuento = importe - (importe * .25);

	document.getElementById("txtIdResultado").value = descuento;
	
}
