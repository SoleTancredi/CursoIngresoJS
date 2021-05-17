function mostrar()
{
    let hora;

    hora = parseFloat(document.getElementById("laHora").value);

    if( hora > 24 || hora < 0)
    {
        alert("Error. Ingrese el horario nuevamente.");
    }

    if( hora >= 6 && hora <= 11)
    {
       alert("Es de mañana!");
    }
    else if( hora >= 12 && hora <= 19)
    {
        alert("Es de tarde");
    }
    else if(hora >= 19 && hora < 22)
    {
        alert("Es de noche");
    }
    else 
    {
        alert("A dormir");
    }

}
