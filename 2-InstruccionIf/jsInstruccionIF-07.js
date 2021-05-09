function mostrar()
{
	let edad;
	let estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);

    document.getElementById("estadoCivil").value = estado;

	if(edad < 18 && estado !="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}


}