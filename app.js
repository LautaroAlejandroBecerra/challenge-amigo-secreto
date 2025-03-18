let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    //le doy un valor a nombreAmigo a través de amigo
    if (nombreAmigo == ''){
        alert ('Por favor, inserte un nombre');
        //validación de la entrada
    } else {
        amigos.push(nombreAmigo);
        //agregar el valor de nombreAmigo a la lista amigos
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
    //limpia el imput
}

