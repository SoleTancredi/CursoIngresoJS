
function mostrar()
{
    let producto;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let flag = 0;
    let alcoholBarato;
    let cantAlcoholBarato;
    let fabricanteAlBarato;
    let acumuladorAlcohol = 0;
    let contadorAlcohol = 0;
    let promedio = 0;
    let acumuladorBarbijo = 0;
    let contadorBarbijo = 0;
    let acumuladorJabon = 0;
    let contadorJabon = 0;
   
    
    for(let i = 1; i <= 5; i++)
    {
        producto = prompt("Ingrese el producto 'barbijo', 'jabon' o 'alcohol': ");

       while(producto != 'barbijo' && producto != 'jabon' && producto != 'alcohol')
        {
           producto = prompt("ERROR. Ingrese correctamente el producto 'barbijo', 'jabon' o 'alcohol': ");
        }

       precio = prompt("Ingrese el precio: ");

        while(precio < 100 || precio > 300)
        {
            precio = prompt("ERROR. Ingrese el precio, recuerde que el mismo debe estar entre 100 y 300: ");  
        }

        cantidad = parseInt(prompt("Ingrese la cantidad: "));

        while(cantidad == 0 || cantidad < 0 || cantidad > 1000)
        {
            cantidad = parseInt(prompt("ERROR. Ingrese la cantidad, recuerde que la misma no puede ser 0 ni numeros negativos o superar las 1000 uidades: ")); 
        }
/*
        marca = prompt("Ingrese la marca: ");

        while(!(isNaN(marca)))
        {
            marca = prompt("ERROR. Ingrese la marca nuevamente: "); 
        }

        fabricante = prompt("Ingrese el fabricante: ");

        while(!(isNaN(fabricante)))
        {
            fabricante = prompt("ERROR. Ingrese el fabricante nuevamente: ");
        }
*/
        if(flag == 0 || precio < alcoholBarato)
        {
            alcoholBarato = precio;
            cantAlcoholBarato = cantidad;
            fabricanteAlBarato = fabricante;
            flag = 1;
        }  //ANDA BIEN

        if(cantidad > 0 && cantidad < 1000 && producto == 'alcohol')
        {
            acumuladorAlcohol = acumuladorAlcohol + cantidad;
            contadorAlcohol++;
        }
        if(cantidad > 0 && cantidad < 1000 && producto == 'barbijo')
        {
            acumuladorBarbijo = acumuladorBarbijo + cantidad;
            contadorBarbijo++;
            
        }
        if(cantidad > 0 && cantidad < 1000 && producto == 'jabon')
        {
            acumuladorJabon = acumuladorJabon + cantidad;
            contadorJabon++;   
        }
        //fin del for
    }
    

    if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
    {
        promedio = acumuladorAlcohol / contadorAlcohol;// deberia entrar aca 
    }
    else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
    {
        promedio = acumuladorBarbijo / contadorBarbijo;
    }
    else
    {
        promedio = acumuladorJabon / contadorJabon;   
    }

    alert("A)El alcohol mas barato es: " + alcoholBarato + "\n" + "Cantidad: " + cantAlcoholBarato + "\n");

    alert("B) El promedio de unidades por compra del producto con mas unidades es: " + promedio);

    alert("Cantidad de jabones en total: " + acumuladorJabon);


   

}
