function mostrar()
{
  let producto;
  let cantidadBolsas=0;
  let cantidadTotalB=0;
  let acumuladorARena = 0;
  let acumuladorCal = 0;
  let acumuladorCemento = 0;
  let precioBolsa;
  let seguir;
  let totalPrecioArena;
  let totalPrecioCal;
  let totalPrecioCemento;
  let totalFinalArena = 0;
  let totalFinalCal = 0;
  let totalFinalCemento = 0;
  let importeTotalBruto=0;
  let importeTotalconDescuento15;
  let importeTotalconDescuento25;
  
  

  do
  {
      producto = prompt("Ingrese el producto que desea comprar, 'arena', 'cal', 'cemento':");

      while(producto != 'arena' && producto != 'cal' && producto != 'cemento')
      {
        producto = prompt("ERROR. Por favor ingrese nuevamente el producto que desea comprar, 'arena', 'cal', 'cemento':");
      }

      cantidadBolsas = parseInt(prompt("INgrese la cantidad de bolsas deseadas: "));

      while(cantidadBolsas < 0 || isNaN(cantidadBolsas))
      {
        cantidadBolsas = parseInt(prompt("ERROR. Por favor, ingrese nuevamente la cantidad de bolsas deseadas: "));
      }

      precioBolsa = parseFloat(prompt("Ingrese el precio de la bolsa: "));

      while(precioBolsa < 0 || isNaN(precioBolsa))
      {
        precioBolsa = parseFloat(prompt("ERROR. Por favor, ingrese nuevamente el precio de la bolsa: ")); 
      }

      seguir = prompt("**DESEA CONTINUAR INGRESANDO PRODUCTOS?**");

      if(producto == 'arena')
      {
        totalPrecioArena = precioBolsa * cantidadBolsas;
        acumuladorARena = acumuladorARena + cantidadBolsas;
        totalFinalArena = totalFinalArena + totalPrecioArena;
        console.log("Total precio Arena:"+totalPrecioArena+" Total acumuladorbolsas de arena:"+acumuladorARena + "preciofinaltotal" + totalFinalArena);
      }
      else if(producto == 'cal')
      {
        totalPrecioCal = precioBolsa * cantidadBolsas;
        acumuladorCal = acumuladorCal + cantidadBolsas;
        totalFinalCal = totalFinalCal + totalPrecioCal;
        console.log("\nTotal precio Cal:"+totalPrecioCal+" Total acumuladorbolsas de cal:"+acumuladorCal);
      }
      else //if(producto == 'cemento') *else* elimina las 2 opciones de arriba 
      {
        totalPrecioCemento = precioBolsa * cantidadBolsas;
        acumuladorCemento = acumuladorCemento + cantidadBolsas;
        totalFinalCemento = totalFinalCemento + totalPrecioCemento;
        console.log("\nTotal precio Cemento:"+totalPrecioCemento+" Total acumuladorbolsas de cemento:"+acumuladorCemento);
      }

      cantidadTotalB = acumuladorARena + acumuladorCal + acumuladorCemento;

      console.log("Contador de Bolsas :"+cantidadTotalB);//46

  }while(seguir == 's')


  importeTotalBruto = totalFinalArena + totalFinalCal + totalFinalCemento;// primero hago la cuenta desp evaluo resultado*
  alert("BRUTO sin descuento: " + importeTotalBruto);

  if(cantidadTotalB > 10 && cantidadTotalB < 30)
  {
    importeTotalconDescuento15 = importeTotalBruto - (importeTotalBruto * .15);
    alert("Precio con descuento incluido: " + importeTotalconDescuento15);
  }
  else if(cantidadTotalB > 30)
  {
    importeTotalconDescuento25 = importeTotalBruto - (importeTotalBruto * .25);
    alert("Precio con descuento incluido: " + importeTotalconDescuento25);
  }

  if(acumuladorARena > acumuladorCal && acumuladorARena > acumuladorCemento)
  {
    alert("El maximo esta en ARENA: " + acumuladorARena);
  }
  else if(acumuladorCal > acumuladorARena && acumuladorCal > acumuladorCemento)
  {
    alert("El maximo esta en CAL: " + acumuladorCal);
  }
  else if(acumuladorCemento > acumuladorARena && acumuladorCemento > acumuladorCal)
  {
    alert("El maximo esta en CEMENTO: " + acumuladorCemento);
  }
  
  if(totalFinalArena > totalFinalCal && totalFinalArena > totalFinalCemento)
  {
    alert("El producto màs caro es ARENA: " + totalFinalArena);
  }
  else if(totalFinalCal > totalFinalArena && totalFinalCal > totalFinalCemento)
  {
    alert("EL producto màs caro es CAL: " + totalFinalCal);
  }
  else if(totalFinalCemento > totalFinalArena && totalFinalCemento > totalFinalCal)
  {
    alert("El producto màs caro es CEMENTO: " + totalFinalCemento);
  }

}
