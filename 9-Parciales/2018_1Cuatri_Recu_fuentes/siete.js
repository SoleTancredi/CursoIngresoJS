function mostrar()
{
    let nota;
    let sexo;
    let acumuladorNotas = 0;
    let minimo;
    let flag = 0;
    let sexoNotaBaja;
    let contadorVarones = 0;
   
    

    for(let i = 0; i < 5; i++)
    {
        nota = parseFloat(prompt("Ingrese su nota: "));

        while(nota < 0 || nota > 10 || isNaN(nota))
        {
            nota = parseFloat(prompt("ERROR. Su nota debe estar entre los numeros 0 y 10. Ingrese nuevamente su nota: ")); 
        }

        sexo = prompt("Ingrese su sexo 'f' o 'm'");

        while(sexo != 'f' && sexo != 'm')
        {
            sexo = prompt("ERROR. Ingrese nuevamente su sexo 'f' o 'm'"); 
        }

        if(nota >= 0 && nota <= 10)
        {
            acumuladorNotas = acumuladorNotas + nota;
        }
    
        if(flag == 0 || nota < minimo)
        {
            minimo = nota;
            sexoNotaBaja = sexo;
            flag = 1;
        }  

        if(nota >= 6 && sexo == 'm')
       {
           contadorVarones++;
       }

    }


    alert("El promedio de notas es: " + acumuladorNotas / 5);

    alert("La nota mas baja fue: " + minimo + " y el sexo del alumno fue: " + sexoNotaBaja);

    alert("Varones aprobados " + contadorVarones);

}
