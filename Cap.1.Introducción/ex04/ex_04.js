// Pedir datos a un usuario (Como ejercicio pues cuando se piden datos se utilizan inputs). 

let nombre, edad, direccion, movil, email; //Se pueden crear tantas variables como se necesiten con una declaración let. 

// prompt es una palabra reservada que despliega una función y sale un mensaje de tipo alert para pedir datos.

nombre = prompt('Escriba su nombre: '); // Se piden los datos al usuario
document.writeln('Tu nombre es: ', nombre, '<br>'); // Se imprimen los datos proporcionados por el usuario

edad = prompt('Digite su edad: '); // Se piden los datos al usuario
document.writeln('Tu edad es: ', edad, '<br>'); // Se imprimen los datos proporcionados por el usuario

direccion = prompt('Escriba su dirección: '); // Se piden los datos
document.writeln('Vives en: ', direccion, '<br>'); // Se imprimen los datos proporcionados por el usuario

movil = prompt('Escriba su móvil: '); // Se piden los datos
document.writeln('Tu número móvil es: ', movil, '<br>'); // Se imprimen los datos proporcionados por el usuario

email = prompt('Escriba su email: '); // Se piden los datos
document.writeln('Tu email es: ', email, '<br>'); // Se imprimen los datos proporcionados por el usuario

//Con la etiqueta <br> se pueden realizar saltos de página

console.log('Tu nombre es: ', nombre, edad, direccion, movil, email);

