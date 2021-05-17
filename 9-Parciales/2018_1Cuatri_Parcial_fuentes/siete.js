function mostrar()
{
    let nota;
    let sexo;
    let minimo;
    let contadorVarones = 0;
    let acumuladorNotas = 0;
    let flag = 0;
   
  
  
    for (let i = 1; i <= 5; i++)
    {
       nota = parseFloat(prompt("Ingrese su nota: "));

       while(nota < 0 || nota >10)
       {
        nota = parseFloat(prompt("Error. Ingrese su nota nuevamente: "));
       }

       acumuladorNotas += nota;
       console.log(acumuladorNotas);

       sexo = prompt("Ingrese su sexo, 'f' para femenino y 'm' para masculino");

       while( sexo != 'f' && sexo != 'm')
       {
            sexo = prompt("Error. Ingrese nuevamnete su sexo, 'f' para femenino y 'm' para masculino"); 
       }

    }

    if(flag == 0 || numero < minimo )
    {
       minimo = numero;
       flag = 1;
    }
   
   alert("El promedio de notas totales es: " + acumuladorNotas / 5);
   alert("La nota màs baja fue: ");



}
