function elegirHorario(n) {
    opcion= parseInt(prompt("Horario del turno: \n\n Ingresa el número de la opción a seleccionar \n 1) 17:00hs \n 2) 18:00hs \n 3) 19:00hs"));
    switch (opcion) {
        case 1:
            alert("Gracias por reservar tu turno! Te esperamos el " + n +" de agosto a las 17:00hs");
            break;
        case 2:
            alert("Gracias por reservar tu turno! Te esperamos el " + n +" de agosto a las 18:00hs");
            break;

        case 3:
            alert("Gracias por reservar tu turno! Te esperamos el " + n +" de agosto a las 19:00hs");
            break;
    }
}


function seleccionarTurno(){
    alert("Ingresa 'S' para reservar el turno y 'N' para ver otra opcion");

    n=1;
    respuesta= prompt("Fecha del turno: \n\n "+n+" de agosto");

    while(respuesta != "S"){
        n++;
        respuesta= prompt(n+" de agosto");
    } 
    elegirHorario(n);
    
}


function comprobarEdad(){
   edad= prompt("Ingresa tu edad");
   if (parseInt(edad)>=18) {
    respuesta= prompt("Querés sacar un turno? (S/N)");
        if (respuesta === "S") {
            prompt("Ingresa tu nombre por favor");
            seleccionarTurno();
        }  
    }
   
}

alert("Bienvenido a mi página!!");
comprobarEdad();

