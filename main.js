function seleccionarTurno(){
    alert("Ingrese 'S' para reservar el turno y 'N' para ver otra opcion");

    n=1;
    respuesta= prompt(n+" de agosto 18:00hs");

    while(respuesta != "S"){
        n++;
        respuesta= prompt(n+" de agosto 18:00hs");
    } 

    alert("Gracias por reservar tu turno! Te esperamos el " + n +" de agosto 18:00hs");
}


function comprobarEdad(){
   edad= prompt("Ingresa tu edad");
   if (parseInt(edad)>18) {
    respuesta= prompt("Querés sacar un turno? (S/N)");
        if (respuesta === "S") {
            seleccionarTurno();
        }  
    }
   
}

alert("Bienvenido a mi página");
comprobarEdad();

