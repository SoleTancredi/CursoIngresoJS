/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidad;
 	let marca;
    let precioFinal = 35;
    let preconDescuento;
    let precio;
    let IIBB;
    

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);

    if(cantidad <= 0)
    {
        alert("Hay un error en el ingreso. Intente nuevamente.");
        document.getElementById("txtIdCantidad").value = 0;
        //queria que en las cajas de cantidad y precio muestre cero ante el error pero lo toma igual//
    }
    
    marca = document.getElementById("Marca").value;

    preconDescuento = document.getElementById("txtIdprecioDescuento").value;

    switch(marca)
    {
        case "ArgentinaLuz":

        if(cantidad >= 6 )
        {
            precio = precioFinal * cantidad;
            preconDescuento = parseFloat(precio - (precio * .5));
            document.getElementById("txtIdprecioDescuento").value = preconDescuento;
           
        }
        else if(cantidad == 5)
        {
            precio = precioFinal * cantidad;
            preconDescuento = parseFloat(precio - (precio * .4));
            document.getElementById("txtIdprecioDescuento").value = preconDescuento;
        
        }
        else if(cantidad == 4 )
        {
            precio = precioFinal * cantidad;
            preconDescuento = parseFloat(precio - (precio * .25));
            document.getElementById("txtIdprecioDescuento").value = preconDescuento;
        
        }
        else if(cantidad == 3)
        {
            precio = precioFinal * cantidad;
            preconDescuento = parseFloat(precio - (precio * .15));
            document.getElementById("txtIdprecioDescuento").value = preconDescuento;
        
        }
        else if(cantidad < 3)
        { 
            precio = precioFinal * cantidad;
            preconDescuento = parseFloat(precio);
            document.getElementById("txtIdprecioDescuento").value = preconDescuento;
        }

        case "FelipeLamparas":

            if(cantidad >= 6 )
            {
                precio = precioFinal * cantidad;
                preconDescuento = parseFloat(precio - (precio * .5));
                document.getElementById("txtIdprecioDescuento").value = preconDescuento;
                
            }
            else if(cantidad == 5)
            {
                precio = precioFinal * cantidad;
                preconDescuento = parseFloat(precio - (precio * .3));
                document.getElementById("txtIdprecioDescuento").value = preconDescuento;
            
            }
            else if(cantidad == 4 )
            {
                precio = precioFinal * cantidad;
                preconDescuento = parseFloat(precio - (precio * .2));
                document.getElementById("txtIdprecioDescuento").value = preconDescuento;
            
            }
            else if(cantidad == 3)
            {
                precio = precioFinal * cantidad;
                preconDescuento = parseFloat(precio - (precio * .1));
                document.getElementById("txtIdprecioDescuento").value = preconDescuento;
            
            }
            else if(cantidad < 3)
            { 
                precio = precioFinal * cantidad;
                preconDescuento = parseFloat(precio);
                document.getElementById("txtIdprecioDescuento").value = preconDescuento;
            }

            case "JeLuz":

                if(cantidad >= 6 )
                {
                    precio = precioFinal * cantidad;
                    preconDescuento = parseFloat(precio - (precio * .5));
                    document.getElementById("txtIdprecioDescuento").value = preconDescuento;
                    
                }
                else if(cantidad == 5)
                {
                    precio = precioFinal * cantidad;
                    preconDescuento = parseFloat(precio - (precio * .3));
                    document.getElementById("txtIdprecioDescuento").value = preconDescuento;
                
                }
                else if(cantidad == 4 )
                {
                    precio = precioFinal * cantidad;
                    preconDescuento = parseFloat(precio - (precio * .2));
                    document.getElementById("txtIdprecioDescuento").value = preconDescuento;
                
                }
                else if(cantidad == 3)
                {
                    precio = precioFinal * cantidad;
                    preconDescuento = parseFloat(precio - (precio * .05));
                    document.getElementById("txtIdprecioDescuento").value = preconDescuento;
                
                }
                else if(cantidad < 3)
                { 
                    precio = precioFinal * cantidad;
                    preconDescuento = parseFloat(precio);
                    document.getElementById("txtIdprecioDescuento").value = preconDescuento;
                }
            
           

            case "HazIluminacion":

                if(cantidad >= 6 )
                {
                    precio = precioFinal * cantidad;
                    preconDescuento = parseFloat(precio - (precio * .5));
                    document.getElementById("txtIdprecioDescuento").value = preconDescuento;
                    
                }
                else if(cantidad == 5)
                {
                    precio = precioFinal * cantidad;
                    preconDescuento = parseFloat(precio - (precio * .3));
                    document.getElementById("txtIdprecioDescuento").value = preconDescuento;
                
                }
                else if(cantidad == 4 )
                {
                    precio = precioFinal * cantidad;
                preconDescuento = parseFloat(precio - (precio * .2));
                document.getElementById("txtIdprecioDescuento").value = preconDescuento;
            
                
                }
                else if(cantidad == 3)
                {
                    precio = precioFinal * cantidad;
                    preconDescuento = parseFloat(precio - (precio * .05));
                    document.getElementById("txtIdprecioDescuento").value = preconDescuento;
                
                }
                else if(cantidad < 3)
                { 
                    precio = precioFinal * cantidad;
                    preconDescuento = parseFloat(precio);
                    document.getElementById("txtIdprecioDescuento").value = preconDescuento;
                }
        case "Osram":

            if(cantidad >= 6 )
            {
                precio = precioFinal * cantidad;
                preconDescuento = parseFloat(precio - (precio * .5));
                document.getElementById("txtIdprecioDescuento").value = preconDescuento;
                
            }
            else if(cantidad == 5)
            {
                precio = precioFinal * cantidad;
                preconDescuento = parseFloat(precio - (precio * .3));
                document.getElementById("txtIdprecioDescuento").value = preconDescuento;
            
            }
            else if(cantidad == 4 )
            {
                precio = precioFinal * cantidad;
                preconDescuento = parseFloat(precio - (precio * .2));
                document.getElementById("txtIdprecioDescuento").value = preconDescuento;
            
            }
            else if(cantidad == 3)
            {
                precio = precioFinal * cantidad;
                preconDescuento = parseFloat(precio - (precio * .05));
                document.getElementById("txtIdprecioDescuento").value = preconDescuento;
            
            }
            else if(cantidad < 3)
            { 
                precio = precioFinal * cantidad;
                preconDescuento = parseFloat(precio);
                document.getElementById("txtIdprecioDescuento").value = preconDescuento;
            }
        
        case "preconDescuento":
            
        if( preconDescuento > 120 )
        {
            IIBB = preconDescuento * 0.1;
            preconDescuento = preconDescuento + IIBB;
            document.getElementById("txtIdprecioDescuento").value = preconDescuento;
            alert("Usted abono el monto de $" + IIBB + " debido al impuesto de Ingresos Brutos")
        }

    }

       
    
}
