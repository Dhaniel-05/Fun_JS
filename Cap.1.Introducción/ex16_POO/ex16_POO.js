/*POO

Los paradigamas principalmente que dan paso a la POO son con Estado, junto con el Imperativo y el Declarativo

Pilares de la Programación Orientada a Objetos

Abstracción: Oculta detalles internos y muestra las características relevantes.

Encapsulamiento: Protege los datos de un objeto para evitar accesos indebidos, promoviendo el uso de métodos públicos para interactur con ellos.

Herencia: Permite que una clase reutilice los atributos y métodos de otra, promoviendo la extensión y personalización.

Polimorfismo: Habilidad de un método o función para comportarse de diferentes maneras según el objeto o los argumentos con los que interactua. 

*/

class Vehiculo {

    constructor(marca, modelo, color, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anio = anio;
        this.encendido = false;
    }

    encender(){
        this.encendido = true;
        console.log(`${this.marca} ${this.modelo} está encendido.`);
    }
    apagar(){
        this.encendido = false;
        console.log(`${this.marca} ${this.modelo} está apagado.`);
    }
    tocarBocina(){
        this.encendido = false;
        console.log("¡Beep beep!");
    }
    mostrarInfo(){
        console.log(`Vehículo: ${this.marca} ${this.modelo} (${this.anio}) - Color: ${this.color}`)
    }
}

//Crear instancia
const miAuto = new Vehiculo("Toyota", "Corolla", "Rojo", 2020);

//Probar los métodos
miAuto.mostrarInfo();
miAuto.encender();
miAuto.tocarBocina();
miAuto.apagar();

//Clase Animal
class Animal {
    constructor(nombre, especie, sonido){
        this.nombre = nombre;
        this.especie = especie;
        this.sonido = sonido;
    }

    hacerSonido(){
        console.log(`${this.nombre} dice: ${this.sonido}`);
    }
    describir(){
        console.log(`${this.nombre} dice: ${this.especie}`);
    }
}

//Crear instancia
const miPerro = new Animal("Bruno","Perro","Guau guau");
const miGato = new Animal("Karin","Gato","Miauwww");

//Probar los métodos
miPerro.describir();
miPerro.hacerSonido();

miGato.describir();
miGato.hacerSonido();

const auto = new Vehiculo("Ford", "Mustang", "Azul", 2024);
auto.mostrarInfo();
auto.encender();
auto.tocarBocina();
auto.apagar();

const perro = new Animal("Rex", "Perro", "Guau");
perro.describir();
perro.hacerSonido();

const gato = new Animal("Séfiro", "Gato", "Miau");
gato.describir();
gato.hacerSonido();