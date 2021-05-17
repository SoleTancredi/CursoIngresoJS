function mostrar()
{
	let numero = 0;
	//puedo dejarlo màs chico aùn//
	//let acumulador = 0;//

	let i = 0;
 
	while(i < 5)
	{
		numero += parseInt(prompt("INgrese un numero: "));

		i ++; 

	}

	
	document.getElementById("txtIdSuma").value = numero;
	document.getElementById("txtIdPromedio").value = numero / 5;


  





}