// Mostrar los números del 1 al 5

// Se usa cuando sabemos cuántas veces queremos repetir algo.
for (let numero = 1; numero <= 5; numero++) {
    console.log("Número actual:", numero);
}

// Mostrar los datos de una persona
// Se usa para recorrer las propiedades de un objeto.
let persona = {
    nombre: "Carlos",
    edad: 25,
    ciudad: "Bogotá"
};

for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

// Contar hasta 3 con un while
// Se usa cuando no sabemos cuántas veces, pero tenemos una condición que se evalúa antes de entrar.
let contador = 1;

while (contador <= 3) {
    console.log("Contador:", contador);
    contador++;
}

// Igual que while, pero siempre ejecuta al menos una vez.
// Mostrar el menú hasta que el usuario elija "Salir"
let opcion = "";

do {
    opcion = prompt("Escribe una opción (Escribe 'Salir' para terminar):");
    console.log("Elegiste:", opcion);
} while (opcion !== "Salir");

// Este se usa para recorrer valores de arreglos (no objetos).
// Recorrer una lista de frutas
let listaDeFrutas = ["manzana", "banana", "uva"];

for (let fruta of listaDeFrutas) {
    console.log("Fruta:", fruta);
}

// Ciclo de números pares
document.writeln('Ciclo de números pares');

for (let x = 2; x <= 20; x+=2) {
    document.writeln(`Valor de x = ${x}`, `<br>`);
}

let usuario, clave, control;

control = 0;
usuario = prompt('Ingrese el usuario...');
clave = prompt('Ingrese su contraseña: ');

do {
    if(clave != 'MiContraseña'){
        clave = prompt('Contraseña incorrecta, Inténtelo de nuevo...');
        control = 0; //continuará valiendo cero mientras la clave digitada sea diferente a la establecida en el sistema.
    } else {
        control = 1; //control valdrá uno cuando la contraseña ingresada sea la correcta.
    }
} while (control != 1);
// La contraseña ingresada es verificada por control, si vale 1 le dará acceso al sistema sino continuará pidiendola hasta que se cumpla la condición o usted programe los intentos.
document.writeln('Acceso concedido!, Bienvenido');

// Saber cuantas vocales tiene la palabra murciélago.

let Palabra = "Murcielagos";
let vocal = 0; //En esta variable vocal se van a guardar la cantidad de vocales que se encuéntren en la palabra. 

for(let p in Palabra){
    if(Palabra[p]=='a' ||Palabra[p]=='e' ||Palabra[p]=='i' ||Palabra[p]=='o' ||Palabra[p]=='u') //El ciclo analiza en cada vuelta si la letra es igual a una de las vocales definidas en la búsqueda.
    {
        vocal++;
    }
}
document.writeln('Cantidad de vocales: ', vocal);