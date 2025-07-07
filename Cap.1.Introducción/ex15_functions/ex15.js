// //Funciones

// function saludo(){
//     document.writeln('Hola Mundo', '<br>');
//     console.log('Hola Mundos');
// }
// saludo();

// function despedida(){
//     document.writeln('Adios Mundo', '<br>');
//     console.log('Chao Mundos');
// }
// despedida();

// //Funciones que reciben parámetros
// function saludarUsuario(nombreUsuario, apellidoUsuario){
//     document.writeln('Hola ', nombreUsuario, ' ', apellidoUsuario, ' Bienvenido(a)', '<br>')
// }
// let nombre = prompt('Dime tu nombre')
// let apellido = prompt('Dime tu nombre')

// saludarUsuario(nombre, apellido);

// function saludarPaciente(nombrePaciente, apellidoPaciente){
//     document.writeln('Hola ', nombrePaciente, ' ', apellidoPaciente, ' Bienvenido(a)')
// }
// let recepcionaNombrePaciente = prompt('Dime tu nombre')
// let recepcionaApellidoPaciente = prompt('Dime tu Apellido')

// saludarPaciente(recepcionaNombrePaciente, recepcionaApellidoPaciente);

// //Fuciones con cálculos simples
// function calcularAreaRectangulo(base, altura){
//     let area = base * altura;
//     return area;
// }
// console.log('El área del rectangulo es: ', area = calcularAreaRectangulo(5, 10));

// function esMayor_o_esMenor(edad){
//     if(edad >= 18) {
//         console.log('Es mayor de edad')
//     } else {
//         console.log('Es menor de edad')
//     }
// }
// esMayor_o_esMenor(20);
// esMayor_o_esMenor(12);

// function suma (){
//     let a = parseInt(prompt('Ingrese el 1er número a sumar:'));
//     let b = parseInt(prompt('Ingrese el 1er número a sumar:'));
//     return a + b; //Devuelve la suma con los números ingresados por el usuario.
// }
// document.writeln('El resultado de la suma es: ', suma(), '<br>');

function verColor(){
    valor = parseInt(prompt('Por favor ingrese números entre 1 y 3 para activar el semáforo...'));

    switch(valor){
        case 1:
            return 'Perfecto has elegido el color: Rojo';
        case 2:
            return 'Perfecto has elegido el color: Verde';
        case 3:
            return 'Perfecto has elegido el color: Amarillo';
        default:
            return 'No ha ingresado un valor o número correcto en la instrucción dada'
    }
}
document.writeln(verColor());
