/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let seguir;
	let contadorPos = 0;
	let contadorNeg = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let acumuladorPos = 0;
	let acumuladorNeg = 0; 
	let promedioPos = 0;
	let promedioNeg = 0;
	let diferencias;

	do 
	{
		numero = parseInt(prompt("Ingrese un nùmero: "));

		if(numero < 0)
		{
			acumuladorNeg += numero;
			contadorNeg++;
		}
		else if(numero == 0)
		{
			contadorCeros++;
		}
		else
		{
			acumuladorPos += numero;
			contadorPos++;
		}

		if(numero % 2 == 0)
		{
			contadorPares++;
		}

	
		seguir = prompt("Quiere ingresar otro nùmero?: ");

	}while(seguir == 's');

	if(contadorPos > 0)
	{
		promedioPos = acumuladorPos / contadorPos;
	}

	if(contadorNeg > 0)
	{
		promedioNeg = acumuladorNeg / contadorNeg;
	}
	
	

	diferencias = contadorPos - contadorNeg;

		

		console.log("Suma de los negativos: " + acumuladorNeg);
		console.log("Suma de los positivos: " + acumuladorPos);
		console.log("Cantidad de positivos " + contadorPos);
		console.log("Cantidad de negativos: " + contadorNeg);
		console.log("Cantidad de ceros: ") + contadorCeros;
		console.log("Cantidad de números pares: " + contadorPares);
		console.log("Promedio de positivos: " + promedioPos);
		console.log("Promedios de negativos: " + promedioNeg);
		console.log("Diferencia entre positivos y negativos: " + diferencias);
		




}