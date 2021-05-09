function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			alert("ue comiences bien el año!");
			break;
		case "Marzo":
			alert("A clases!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones de invierno!");
			break;
		case"Diciembre":
		    alert("Felices FIestas!");
			break;
					
	}



}