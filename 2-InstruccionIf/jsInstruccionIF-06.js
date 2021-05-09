function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13)
	{
		alert("Ustes es un NIÑO");
	}
	else if(edad >=13  && edad <= 17)
	{
		alert("Usted es ADOLESCENTE");
	}
	else
	{
		alert("Usted es MAYOR");
	}


}