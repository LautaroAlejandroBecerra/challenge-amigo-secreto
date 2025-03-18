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
        //deja el valor de amigo en 0
        leerLista();
        //recorre el array y lo deja en 0 para que no repita nombres
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
    //limpia el imput
}

function leerLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    //en las dos lineas creo una lista en la pagina y vacio la lista amigos para que no repita nombres
    for (let index = 0; index < amigos.length; index++) {
       lista.innerHTML += `<li>${amigos[index]}</li>`
    }
    //suma un nuevo nombre a la lista
}

function sortearAmigo() {
    if (amigos == ''){
        alert ('No hay amigos para sortear');
        //el imput está vacio saldrá un aviso
    } else {
        let numeroGenerado = Math.floor(Math.random()*amigos.length);
        //genera un numero, el limite es la cantidad de nombres que hay
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigos[numeroGenerado]
        //el numero generado ubica el nombre en la lista y modifica la seccion de resultado para poner ese nombre que corresponde al numero aleatorio
    }
}