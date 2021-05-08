function mostrar()
{
	let numero;
	let contadorDivisores = 0;

	numero = parseInt(prompt("Ingrese un nùmero:"));

	for(let i = 1 ; i <= numero ; i++)
	{
		if(numero % i == 0)
		{
			contadorDivisores++;
		
		}
		
	}

	if(contadorDivisores == 2)
	{
		alert("Este nùmero es PRIMO!");
	
	}
	else 
	{
		alert("Este nùmero NO es PRIMO");
	}

		



		


	

}