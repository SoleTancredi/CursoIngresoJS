/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let maximo;
	let minimo;
	let seguir;
	let flag = 0;

	do
	{
		numero = parseInt(prompt("Ingrese un numero: "));

		if(flag == 0  || numero > maximo)
		{
			maximo = numero;
		}
		
		if(flag == 0 || numero < minimo )
		{
			minimo = numero;
			flag = 1;
		}
	
		seguir = prompt("Quiere ingresar otro nùmero?");

	}while (seguir == 's');

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;






}