// Operadores Matemáticos
let a, b; // Aquí va a dar un error es normal.
let c, d; // Aquí las operaciones van a dar el resultado real.
let suma, resta, mult, div, residuo, potencia; // Variables para obtener los resultados de los operandos.

//Obtener los datos ingresados por el usuario
a = prompt('Ingrese un número: ');
b = prompt('Ingrese otro número: ');

//Resultados de las operaciones
suma = a + b; //aquí la operación no se da pues se concatenan los valores por el operando +
resta = a - b;
mult = a * b;
div = a / b;
residuo = a % b;
potencia = a ** b;

//Imptimir los resultados
document.writeln(
    'Resultados de la operación a + b sin convertir valores', '<br>',
    'La suma es: ', suma, '<br>',
    'La resta es: ', resta, '<br>',
    'La multiplicación es: ', mult, '<br>',
    'La división es: ', div, '<br>',
    'El residuo es: ', residuo, '<br>',
    'La potencia es: ', potencia, '<br>',
);

document.writeln('<br>') // Salto de línea

//Segunda operación
// Para que las operaciones numéricas se pueda dar correctamente, se deben convertir los datos ingresados con parseInt o parseFloat.

//Obtener los datos ingresados por el usuario pero ya parseados
c = parseInt(prompt('Ingrese un número: '));
d = parseFloat(prompt('Ingrese otro número: '));

//Resultados del segundo bloque de operaciones
suma = c + d;
resta = c - d;
mult = c * d;
div = c / d;
residuo = c % d;
potencia = c ** d;


document.writeln(
    'Resultados de la operación c + d conviertiendo los valores', '<br>',
'La suma es: ', suma, '<br>',
    'La resta es: ', resta, '<br>',
    'La multiplicación es: ', mult, '<br>',
    'La división es: ', div, '<br>',
    'El residuo es: ', residuo, '<br>',
    'La potencia es: ', potencia, '<br>',
);