/*CONDICIONALES

Funcionalidades que permiten mejorar la toma de decisiones en la ejecución del código, Estás decisiones se basan en evaluar si una o más condiciones son verdaderas o falsas, es decir, si se cumple algo en ciertas situaciones, parámetros o codiciones específicas.

Ahora bien, se puede verificar si se cumple una condición determinada tiene un resultado específico, el programa se ejecutará dentro de las instrucciones dadas.

*/

// Condicional if() else{}

let nombre, edad;
nombre = prompt('Ingresa tu nombre: ');
edad = prompt('Ingresa tu edad: ');
edad = parseInt(edad);

if (edad >= 18) {
    document.writeln('Tú eres mayor de edad');
    console.log('edad digitada: ',edad, 'Mayor de edad')
} else {
    document.writeln('Tú eres menor de edad');
    console.log('edad digitada: ',edad, 'Menor de edad')
}