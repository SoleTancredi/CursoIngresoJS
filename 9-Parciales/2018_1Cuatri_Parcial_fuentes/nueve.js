function mostrar()
{
    let marca;
    let peso;
    let temperatura;
    let seguir;
    let contadorTempPares = 0;
    let marcaMayorPeso;
    let contadorMasFrios = 0;
    let acumuladorPeso = 0;
    let contadorPeso = 0;
    let promedio;
    let flag = 0;
    let maximo;
    let minimo;

    do
    {
        marca = prompt("Ingrese la marca del producto: ");

        while(!(isNaN(marca)))
        {
            marca = prompt("ERROR. Ingrese la marca del producto: ");
        }

        peso = parseFloat(prompt("Ingrese el peso del producto: "));

        while(peso < 1 || peso > 100)
        {
            peso = parseFloat(prompt("ERROR. Ingrese el peso del producto, el mismo debe estar entre 1 y 100: "));
        }

        temperatura = parseFloat(prompt("Ingrese la temperatura de almacenamiento del producto: "))

        while(temperatura < -30 || temperatura > 30)
        {
            temperatura = parseFloat(prompt("ERROR. Ingrese la temperatura de almacenamiento del producto, el mismo debe estar entre -30 y 30 grados: "))
        }

        if(temperatura % 2 == 0)
        {
            contadorTempPares++;
        }
        else if(temperatura < 0)
        {
            contadorMasFrios++;
        }

        if(flag == 0 || peso > maximo)
        {
            maximo = peso;
            marcaMayorPeso = marca;
        }
        if(flag == 0 || peso < minimo)
        {
            minimo = peso;
            flag = 1;
        }

        if(peso >= 1 && peso <= 100)
        {
            acumuladorPeso = acumuladorPeso + peso;
            contadorPeso++;
            promedio = acumuladorPeso / contadorPeso;
        }


        seguir = prompt("** Desea cotinuar ingresando productos? **");

    }
    while(seguir == 's')

    alert("La cantidad de temperaturas pares es: " + contadorTempPares);

    alert("La marca del producto màs pesado es: " + marcaMayorPeso);

    alert("El peso màximo es: " + maximo + " y el peso minimo es: " + minimo);

    alert("La cantidad de productos que se conservan a menos de 0º es: " + contadorMasFrios);

    alert("El promedio del peso de todos los productos es: " + promedio);














} 


