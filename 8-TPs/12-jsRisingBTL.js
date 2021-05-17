/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;

	alert( "Bienvenido! A continuacion le solicitaremos determinados datos para poder generar su legajo.");

	edad = prompt("Ingrese su edad:");

	while(!(edad >= 18 && edad <= 90))
	{
		edad = prompt("Error. Debe estar en el rango etareo activo laboralmente. Ingrese su edad nuevamente.");
	}

	document.getElementById("txtIdEdad").value = edad;

	sexo = prompt("Ingrese su sexo, indicando 'M' para masculino o 'F' para femenino: ");

	while( sexo != "F" && sexo != "M")
	{
		sexo = prompt("Error. Ingrese F para femenino o M para masculino. Intente nuevamente.");
	}

	document.getElementById("txtIdSexo").value = sexo;

	estadoCivil = prompt("Ingrese el numero correcto correspondiente a su estado civil:\n '1' - Soltero\n '2' - Casado\n '3' - Divorciado\n '4' - Viudo\n");

	while( estadoCivil != '1' && estadoCivil != '2' && estadoCivil != '3' && estadoCivil != '4')
	{
		estadoCivil = prompt("Error. Ingrese el nùmero correspondiente a su estado civil:\n '1' - Soltero\n '2' - Casado\n '3' - Divorciado\n '4 '- Viudo\n ");
	}

	document.getElementById("txtIdEstadoCivil").value = estadoCivil;

	sueldoBruto = prompt("Ingrese el monto de su sueldo bruto actual: ");

	while( sueldoBruto < 8000)
	{
		sueldoBruto = prompt("Error. Intente nuevamente. Su sueldo no puede ser menor a $8.000 ");
	}

	document.getElementById("txtIdSueldo").value = sueldoBruto;

	numeroLegajo = prompt("Ingrese su numero de legajo:");

	while( numeroLegajo < 1000 || numeroLegajo > 9999)
	{
		numeroLegajo = prompt("Error. Ingrese nuevamente su numero de legajo. El mismo no puede incluir ceros a la izquiera y debe ser de 4 cifras.");
	}

	document.getElementById("txtIdLegajo").value = numeroLegajo;

	nacionalidad = prompt("Ingrese su nacionalidad, con las siguientes letras:\n 'A' para argentinos\n 'E' para extranjeros\n 'N' para nacionalizados");

	while( nacionalidad != 'A' && nacionalidad != 'E' && nacionalidad != 'N' )
	{
		nacionalidad = prompt("Ingrese una letra correcta");
	}

	document.getElementById("txtIdNacionalidad").value = nacionalidad;














}
