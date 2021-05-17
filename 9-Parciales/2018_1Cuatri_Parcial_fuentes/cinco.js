function mostrar()
{
    let planeta;
 

    planeta = prompt("Ingrese un planeta a elecciòn: 'mercurio' , 'venus' , 'tierra' , 'marte' , 'jupiter' ,'saturno' , 'urano' , 'neptuno'");

    while(planeta != 'marcurio' && planeta != 'venus' && planeta != 'tierra' && planeta != 'marte' && planeta != 'jupiter' && planeta != 'saturno' && planeta != 'urano' && planeta != 'neptuno')
    {
        planeta = prompt(" Eror. Intente nuevamente. Ingrese un planeta a elecciòn: 'mercurio' , 'venus' , 'tierra' , 'marte' , 'jupiter' ,'saturno' , 'urano' , 'neptuno'");
    }
    
    switch(planeta)
    {
        case "mercurio":
            alert("Aca hace mucho calor!");
            break;
        case "venus":
            alert("Aca hace mucho calor!");
            break;
        case "tierra":
            alert("Aca vivimos nosotros!");
            break;
        case "marte":
            alert("El proyecto de Elon!");
            break;
        case "jupiter":
            alert("Aca se empieza a poner mas fresco.");
            break;
        case "saturno":
            alert("Aca hace mas frio!!");  
            break; 
        case "urano":
            alert("Aca hace mas frio!!");  
            break;      
        case "neptuno":
            alert("Aca hace mas frio!!");   
            break;      
       
    }
    
    

   
}
