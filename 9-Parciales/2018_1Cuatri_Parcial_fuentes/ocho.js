function mostrar()
{
   let letra;
   let numero;
   let seguir;
   let contadorPares = 0;
   let contadorImpares = 0;
   let contadorCeros = 0;
   let acumuladorPositivos = 0;
   let contadorPositivos = 0;
   let promedio;
   let acumuladorNegativos = 0;
   let maximo;
   let minimo;
   let flag = 0;
   let letraMax;
   let letraMin;

   do
   {
       letra = prompt("Ingrese una letra a eleccion:");

       while(!(isNaN(letra)))
       {
        letra = prompt("Error. Ingrese una letra a eleccion:");   
       }

       numero = parseInt(prompt("Ingrese un nùmero entero entre -100 y 100"));

       while(numero < -100  || numero > 100)
       {
        numero = parseInt(prompt("Error. Ingrese un nùmero entero entre -100 y 100"));
       }

       if(numero % 2 == 0 && numero != 0)
       {
          contadorPares++;
       }
       else if(numero % 2 != 0)
       {
          contadorImpares++;
       }
       else if(numero == 0)
       {
          contadorCeros++;
       }

       if(numero > 0)
       {
          acumuladorPositivos = acumuladorPositivos + numero;
          contadorPositivos++;
          promedio = acumuladorPositivos / contadorPositivos;
       }
       else if(numero < 0)
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

       
       seguir = prompt(":) Desea continuar con el ingreso? :)");
    }
   while(seguir == 's')

 

   alert("La cantidad de numeros pares es:" + contadorPares);

   alert("La cantidad de numeros impares es :" + contadorImpares);

   alert("La cantidad de ceros es :" + contadorCeros);

   alert("El promedio de todos los numeros positivos ingresados es de: " + promedio);

   alert("La suma total de lo numeros negativos es de: " + acumuladorNegativos);

   alert("El numero minimo es: " + minimo + " Y su letra es: " + letraMin);

   alert("El numero maximo es: " + maximo + " Y su letra es: " + letraMax);
    

    
    










}
