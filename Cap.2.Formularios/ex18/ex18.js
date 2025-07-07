let control = 0;
let contraseña = 'Santo_Seña';

function verificar(){
    let clave = document.getElementById('clave').value;

    if(clave != contraseña || clave ==''){
        alert('Contraseña incorrecta o vacía, inténtelo de nuevo');
        control++;
            if(control>=3){
                alert('Agotó el número de intentos permitidos, acceso bloqueado... contacte a soporte técnico');
            } 
        } else {
                window.open('http://www.google.com');
    }
}