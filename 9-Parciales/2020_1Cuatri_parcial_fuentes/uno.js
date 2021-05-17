
function mostrar()
{
	let producto;
	let acumuladorBarbijo = 0;
	let acumuladorJabon = 0;
	let acumuladorAlcohol = 0;
	let contadorB = 0;
	let contadorJ = 0;
	let contadorA = 0;
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabicante;

	for(let i = 0; i < 5; i++)
	{
		tipo = prompt("Ingrese el tipo: barbijo - jabon - alcohol");
		

		while (tipo != "barbijo" && tipo != "jabon"  && tipo != "alcohol")
		{
			tipo =  prompt("Error en el tipo ingresado. Por favor, ingrese el tipo nuevamente.");	

		}

		precio = parseFloat(prompt("Ingrese el precio:"));

		while (precio < 100 || precio > 300 )
		{
			precio = parseFloat(prompt("Error en el precio ingresado. Por favor, ingrese el precio nuevamente."));	
		}

		cantidad = parseInt(prompt("Ingrese la cantidad:"));

		while (!(cantidad != 0 && cantidad > 0 && cantidad < 1000))
		{
			cantidad = parseInt(prompt("Error en el ingreso, no se permiten '0' ni numeros negativos. Por favor, ingrese nuevamente la cantidad."));
		}

		marca = prompt("Ingrese la marca");

		fabricante = prompt("Ingrese el fabricante");

		switch(tipo)
		{
			case "alcohol":
				if(precio > 150)
				{
				//	contadorA++;
					//fabricante++;
					alert("Hola");
				}
		}


	}






}
