function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		alert("Usted NO es mayor de edad");

	}


}