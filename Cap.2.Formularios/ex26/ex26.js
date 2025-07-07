function pesta(){
    let pestan = open();
    pestan.document.writeln('Se abrio como nueva pestaña');
}

function ventana(){
    let ventana = open('','', 'width=400, height=250');
    ventana.document.writeln('Se abrió como una nueva ventana');
}

function confirmar(){
    let respuesta = confirm('¿Desea salir del sitio?');
    if(respuesta == true){
        window.close();
    }
}

//Explicación:
/*
let ventana = open('','', 'width=400, height=250');

En este caso las comillas vacías indican que no se carga una URL específica, además, que debe desanclarse del navegador actual y crear una nueva ventana con las dimensiones especificas.
*/

function redireccionar(){
    if(window.confirm('¿Desea salir de la página actual?')){
        window.location = 'https://github.com/'
    }
}

// Conteo y disponibilidad de caráteres

document.getElementById('texto').addEventListener('keyup', caracteres);

function caracteres(){
    let cant = document.getElementById('texto').value.length;
    let disponible = 20 - parseInt(cant);

    document.getElementById('cantidad').innerHTML = disponible;
    if(disponible==0){
        swal('¡Cantidad de carácteres agotados!');
    }
}
