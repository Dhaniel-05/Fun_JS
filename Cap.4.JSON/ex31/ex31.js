/*
JSON
Un archivo .json es como una hoja de apuntes ordenada donde se guardan t¿datos de manera clara para que una persona o un programa los pueda leer, entender y utilizar.

Ejemplo Cotidiano: Haga de cuenta que es como un cuaderno o libreta de notas donde usted escribe información importante de alguien como por ejemplo: su nombre, edad, dirección, teléfono y esta información la mantiene en el mismo formato y bien organizada para cuando usted o alguien que requiera dicha información la necesite y pueda encontrala fácilmente.

Ejemplo técnico: Entidad Personas o Directorio de Personas.

{
    "nombre":"su nombre completo",
    "edad":"tiene 40 años",
    "direccion":"Carrera 25 # 38 - 65",
    "telefono":"3107406038",
    "email":"sucorreoelectronico@correo.com",
}

Ejemplo de un menú en archivo.json:

{
    "plato":"hamburguesa",
    "precio":22000,
    "ingredientes": ["pan","lechuga", "carne"],
    "disponible":true
}

*/

let persona = {
    "nombre":"Adolfo",
    "edad": 40,
    "aprendiz":"false",
    "residencia": {"direccion":"calle 34 # 31-20",
    "ciudad":"Palmira",
    "departamento":"Valle del Cauca"},
    "telefono":"3188688008"
}

let elementoTexto = document.getElementById('nombre');

elementoTexto.textContent = persona.nombre;