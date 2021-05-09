function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad >= 18)
	{
		alert("Usted es MAYOR DE EDAD");

	}
	else
	{
		alert("Usted es MENOR DE EDAD");
	}



}