function mostrar()
{
	let numero;


	for (; ;)
	{
	  numero = parseInt(prompt("Ingrese unn nùmero: "));

	  if (numero == 9)
	  {
		  break;
	  }

	  alert("Usted ingreso el nùmero " + numero);
	
	}


}