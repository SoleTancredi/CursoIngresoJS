function mostrar()
{
	let numero;
	let maximo = 10;
	let minimo = 1;

	numero = Math.round(Math.random()*(maximo - minimo) + minimo);



	if(numero == 9 || numero == 10)
	{
		alert("Su nota es " + numero + " EXCELENTE");

	}
	else if(numero > 4)
	{
		alert("Su nota es " + numero + " APROBÒ");
	}
	else
	{
		alert("Su nota es " + numero + " Vamos, la pròxima se puede");
	
	}

	

}