/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let suma;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = num1 + num2;

	alert("El resultado de la suma es: " + suma);


}

function restar()
{
	let num1;
	let num2;
	let resta;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resta = num1 - num2;

	alert("El resultado de la resta es: " + resta);

}

function multiplicar()
{ 
	let num1;
	let num2;
	let multiplicacion;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	multiplicacion = num1 * num2;

	alert("El resultado de la multiplicacion es: " + multiplicacion);

}

function dividir()
{
	let num1;
	let num2;
	let division;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	division = num1 / num2;

	alert("El resultado de la division es: " + division);

}

