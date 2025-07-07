function focalizar(){
    document.getElementById('nombre').value='';
    document.getElementById('nombre').style.border='';
    document.getElementById('nombre').style.borderRadius='8px';
}

function validarVacios(){
    if (document.getElementById('nombre').value==''){
        document.getElementById('nombre').style.border='2px solid red';
        document.getElementById('nombre').style.borderRadius='8px';
        swal('¡Debe de ingresar el Nombre!')
    }
}