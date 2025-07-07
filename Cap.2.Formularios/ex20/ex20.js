function saludo(){
    swal('¡Hola Mundo!')
}

function saludoPersonalizado(){
    swal({
        title: '¡Que tal Mundo!',
        text: 'Bienvenidos al curso fundamentos de Javascript',
        icon: 'success',
        button: '¡Engine!'
    })
}