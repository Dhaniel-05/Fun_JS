// Ejercicio de Contador

let contador = 0;

function actualizarVista(){
    document.getElementById("valorContador").textContent = `Valor: ${contador}`;
}

function incrementar(){
    contador++;
    actualizarVista();
}

function decrementar(){
    contador--;
    actualizarVista();
}