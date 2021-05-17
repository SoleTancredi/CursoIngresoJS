/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares()
{
    let numero;
    let contadorPares = 0;

    numero = parseInt(document.getElementById("txtIdNumero").value);

    while(numero <= 0)
    {
        alert("Error. Debe ingresar un numero positivo. Intentelo nuevamente.");
        break;
    }

    for( let i = 1 ; i <= numero ; i++)
    {  
        if( i % 2 == 0)
        {
            contadorPares++;
        }
    }
    alert("Pares encontrados: " + contadorPares);
 
}

function NumerosImpares()
{
    let numero;
    let contadorImpares = 0;

    numero = parseInt(document.getElementById("txtIdNumero").value);

    while(numero <= 0)
    {
        alert("Error. Debe ingresar un numero positivo. Intentelo nuevamente.");
        break;
    }

    for( let i = 0; i <= numero ; i++ )
    {
        if( i % 2 != 0)
        {
            contadorImpares++;
        }
    }
    alert("Impares encontrados: " + contadorImpares);
 
}

function NumerosDivisibles()
{
    let numero;
    let contadorDivisibles= 0;

    numero = parseInt(document.getElementById("txtIdNumero").value);

    while(numero <= 0)
    {
        alert("Error. Debe ingresar un numero positivo. Intentelo nuevamente.");
        break;
    }

    for( let i = 1; i <= numero ; i++)
    {
        if(numero % i == 0 && numero >= 1 && numero <= 100)
        {
            contadorDivisibles++;
            console.log(i);
        }
    }
    alert("Divisibles encontados: " + contadorDivisibles);
    
}

function VerificarPrimo()
{
    let numero;
    let contadorPrimos = 0;

    numero = parseInt(document.getElementById("txtIdNumero").value);

    while(numero <= 0)
    {
        alert("Error. Debe ingresar un numero positivo. Intentelo nuevamente.");
        break;
    }

    for( let i = 2; i < numero ; i++)
    {
        if(numero % i == 0)
        {
            contadorPrimos++;
        }

        if( contadorPrimos == 0)
        {
            alert("El nùmero " + numero + " es PRIMO.");
            break;
        }
        else
        {
            alert("El nùmero " + numero + " NO es primo");
            break;
        }       
    }
}

function NumerosPrimos()
{
        let numero;
        let contadorPrimos = 0;

        numero = parseInt(document.getElementById("txtIdNumero").value);

        while(numero <= 0)
        {
            alert("Error. Debe ingresar un numero positivo. Intentelo nuevamente.");
            break;
        }
    
        for(let i = 1; i <= numero ; i++)
        {
            if( numero % i == 0)
            {
                contadorPrimos++;
                console.log(i);
            }
        }
        alert("Numero primos encontrados: " + contadorPrimos);
}        



  
        
    













