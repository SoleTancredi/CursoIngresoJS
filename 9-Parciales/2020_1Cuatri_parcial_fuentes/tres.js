function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let seguir;
	let flag = 0;
	let maximoTemp;
	let personaMasTemp;
	let contadorViudos = 0;
	let contadorHombresSoV = 0;
	let contadorViejitosEnfermos = 0;
	let contadorSolteros = 0;
	let acumuladorSolteros = 0;
	let promedioEdadSolteros;

	do 
	{
		nombre = prompt("Ingrese su nombre");

		while(!(isNaN(nombre)))
		{
			nombre = prompt(" ERROR . Ingrese NUEVAMENTE su nombre");
		}

		edad = parseInt(prompt("Ingrese su edad: "));

		while ( edad < 0 || edad > 100)
		{
			edad = parseInt(prompt(" ERROR . Ingrese NUEVAMENTE su edad: "));
		}

		sexo = prompt("Ingrese su sexo: 'f' paa femenino y 'm' para masculino");

		while(sexo != 'f' && sexo != 'm')
		{
			sexo = prompt(" ERROR . Ingrese NUEVAMENTEsu sexo: 'f' paa femenino y 'm' para masculino");
		}

		estadoCivil = prompt("Ingrese su estado civil: \n 'soltero' \n 'casaso' \n 'viudo'");

		while(estadoCivil != 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo')
		{
			estadoCivil = prompt("ERROR . Ingrese NUEVAMENTE su estado civil: \n 'soltero' \n 'casaso' \n 'viudo'");
		}

		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura corporal actual: "));

		while(temperaturaCorporal < 0 || temperaturaCorporal > 60)
		{
			temperaturaCorporal = parseFloat(prompt("ERROR. Ingrese NUEVAMENTE su temperatura corporal actual: "));
		}

		if(flag == 0 || temperaturaCorporal > maximoTemp)
	    {
		     maximoTemp = temperaturaCorporal;
		     personaMasTemp = nombre;
		     flag = 1;
	    }

		if(edad > 18 && estadoCivil == 'viudo')
		{
			contadorViudos++;
		}

		if(sexo == 'm' && estadoCivil == 'soltero' || sexo == 'm' && estadoCivil == 'viudo')
	    {
		   contadorHombresSoV++;
	    }

		if(edad > 60 && temperaturaCorporal > 38)
		{
			contadorViejitosEnfermos++;
		}


		seguir = prompt("**DESEA CONTINUAR INGRESANDO PASAJEROS?**");

		if(sexo == 'm' && estadoCivil == 'soltero')
		{
			contadorSolteros++;
			acumuladorSolteros = acumuladorSolteros + edad;
			promedioEdadSolteros = acumuladorSolteros / contadorSolteros;
		}

	}while(seguir == 's')

	alert("La persona con màs temperatura es: " + personaMasTemp + " con " + maximoTemp + " de temperatura actual.");

	alert("La cantidad de mayores de edad, viudos es de: " + contadorViudos);

	alert("La cantidad de HOMBRES SOLTEROS O VIUDOS es de : " + contadorHombresSoV);

	alert("La cantidad de viejitos con mas de 38 grados de temperatura es de: " + contadorViejitosEnfermos);

	alert("El promedio de edad de los hombres soltero es de: " + promedioEdadSolteros);



	
	



}
