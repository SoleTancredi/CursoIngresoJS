/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = prompt("Ingrese un numero entre 1 y 10");

	while (numero < 0 || numero > 10)
	{
		numero = prompt("Nùmero invàlido. Debe ingresar un nùmero entre 1 y 10. Intentelo denuevo.");

	}

	document.getElementById("txtIdNumero").value = numero;
	
}