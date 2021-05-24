function mostrar() {
    let letra;
    let numero;
    let seguir;
    let contadorPares = 0;
    let contadorImpares = 0;
    let contadorCeros = 0;
    let acumuladorPositivos = 0;
    let contadorPositivos = 0;
    let acumuladorNegativos = 0;
    let maximo;
    let minimo;
    let flag = 0;
    let letraMax;
    let letraMin;

    do {
        letra = prompt("Ingrese una letra a elecciòn: ");

        numero = parseInt(prompt("Ingrese un numero a elecciòn, entre el -100 y 100"));

        while (numero < -100 || numero > 100) {
            numero = parseInt(prompt("ERROR. Ingrese un numero a elecciòn, entre el -100 y 100"));
        }

        seguir = prompt("** Desea continuar ingresando datos? **");

        if (numero % 2 == 0 && numero != 0)
        {
            contadorPares++;
        }
        else if (numero % 2 != 0) 
        {
            contadorImpares++;
        }
        else if (numero == 0) 
        {
            contadorCeros++;
        }

        if(numero > 0)
        {
            contadorPositivos++;
            acumuladorPositivos = acumuladorPositivos + numero;
        }

        if( numero < 0)
        {
            acumuladorNegativos = acumuladorNegativos + numero;
        }
        
        if(flag == 0 || numero > maximo)
        {
            maximo = numero;
            letraMax = letra;
        }

        if(flag == 0 || numero < minimo)
        {
            minimo = numero;
            letraMin = letra;
            flag = 1;
        }
        




    }
    while (seguir == 's')

    

    alert("Cantidad de PARES: " + contadorPares);

    alert("Cantidad de IMPARES: " + contadorImpares);

    alert("Cantidad de CEROS: " + contadorCeros);

    alert("Promedio de todos los positivos ingresados: " + acumuladorPositivos / contadorPositivos);

    alert("Total de NEGATIVOS: "+ acumuladorNegativos);

    alert("El numero del MAXIMO es: " + maximo + " su letra es: " + letraMax + "\n" + "El numero MINIMO es: " + minimo + " y su letra es: " + letraMin);






}
