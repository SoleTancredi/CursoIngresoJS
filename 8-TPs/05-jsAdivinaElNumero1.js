/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let maximo = 100;
let minimo = 1;
let numeroSecreto = parseInt(Math.round(Math.random()* (maximo - minimo) + minimo));

function comenzar()
{
  
  alert( numeroSecreto + "EL JUEGO HA COMENZADO! \n Por favor, ingrese un nùmero entre 1 y 100");
  
  
}

function verificar()
{
	
  let numero;
  let intentos = 1;
  
  numero = parseInt(document.getElementById("txtIdNumero").value);
    
    document.getElementById("txtIdIntentos").value = intentos; 
  
  
    if( numero < 1 || numero > 100)
    {
      alert("Error. Ingrese un nùmero entero entre 1 y 100");
      
    }
    if(numero == numeroSecreto)
    {
      alert("Felicidades has acertado en nùmero en " + intentos + " cantidad de intentos.");
      intentos++;
    }
    if(numero < numeroSecreto)
    {
      alert("Todabia falta!! Continua intentando!");
      intentos++;
    }
    if(numero > numeroSecreto)
    {
      alert("Sas! Te pasaste!! Intenta nuevamente!");
      intentos++;
    }
 
	
}