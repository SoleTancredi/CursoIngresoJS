function mostrar()
{
	let estacion;
	let destino;
	let tarifaBase = 15000;
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":

		if(destino == "Bariloche")
		{
			precioFinal = tarifaBase + (tarifaBase * .2);
			alert("El precio final para este destino es de $" + precioFinal);
			break;
		}
		else if(destino == "Cataratas" || destino == "Cordoba")
		{
			precioFinal = tarifaBase - (tarifaBase * .1);
			alert("El precio final para este destino es de $" + precioFinal);
			break;
		}
		else
		{
			precioFinal = tarifaBase - (tarifaBase * .2);
			alert("El precio final para este destino es de $" + precioFinal);
			break;
		}

		case "Verano":

		if(destino == "Bariloche")
		{
			precioFinal = tarifaBase - (tarifaBase * .2);
			alert("El precio final para este destino es de $" + precioFinal);
			break;
		}
		else if (destino == "Cataratas" || destino == "Cordoba")
		{
			precioFinal = tarifaBase + (tarifaBase * .1);
			alert("El precio final para este destino es dde $" + precioFinal);
			break;
		}
		else 
		{
			precioFinal = tarifaBase + (tarifaBase * .2);
			alert("El precio final para este destino es de $" + precioFinal);
			break;
		}

		case "Otoño":

		if(destino == "Bariloche")
		{
			precioFinal = tarifaBase + (tarifaBase * .1);
			alert("El precio final para este desrino es de $" + precioFinal);
			break;
		}
		else if(destino == "Cataratas")
		{
			precioFinal = tarifaBase + (tarifaBase * .1);
			alert("El precio final paa este destino es de $" + precioFinal);
			break;
		}
		else if(destino == "Mar del plata")
		{
			precioFinal = tarifaBase  + (tarifaBase * .1);
			alert("El precio final para este destino es de $" + precioFinal);
			break;
		}
		else
		{
			precioFinal = tarifaBase;
			alert("El precio final para este destino es de $" + precioFinal);
			break;
		}
	
		case "Primavera":

		if(destino == "Bariloche")
		{
			precioFinal = tarifaBase + (tarifaBase * .1);
			alert("El precio final para este desrino es de $" + precioFinal);
			break;
		}
		else if(destino == "Cataratas")
		{
			precioFinal = tarifaBase + (tarifaBase * .1);
			alert("El precio final paa este destino es de $" + precioFinal);
			break;
		}
		else if(destino == "Mar del plata")
		{
			precioFinal = tarifaBase  + (tarifaBase * .1);
			alert("El precio final para este destino es de $" + precioFinal);
			break;
		}
		else
		{
			precioFinal = tarifaBase;
			alert("El precio final para este destino es de $" + precioFinal);
			break;
		}
	

	}


	

}