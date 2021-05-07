/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave: ");

	while(clave != "utn750")
	{
		clave = prompt("Clave invàlida!! Reingrese clave: ");

	}
	alert("Clave vàida!!");

	
	
}
