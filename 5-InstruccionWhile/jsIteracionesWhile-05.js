/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese su sexo");

	while(sexo != "f" && sexo != "m")
	{
		sexo = prompt("Eror. Ingrese su sexo nuevamente.")

	}
	document.getElementById("txtIdSexo").value = sexo;
}