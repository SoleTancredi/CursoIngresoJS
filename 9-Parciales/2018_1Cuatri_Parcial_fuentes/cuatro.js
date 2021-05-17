function mostrar()
{
    let num1;
    let num2;
    let resta;
    let suma;

    num1 = parseInt(prompt("Bienvenido! Ingrese el primer nùmero: "));
    num2 = parseInt(prompt("Ingrese el segundo nùmero: "));

   if( num1 == num2)
   {
       alert("Los numeros ingresados son: " + num1 + " y " + num2);
   }
   else if(num1 > num2)
   {
       resta = num1 - num2;
       alert("La resta entre ambos numeros da: " + resta);
   }
   else if(num1 < num2)
   {
       suma = num1 + num2;

       if (suma < 10)
       {
        alert("El resultado es: " + suma); 

       }
       else if(suma > 10)
       {
           alert("La suma es: " + suma + " y es mayor a 10");
       }

    }
    
}
   
  


