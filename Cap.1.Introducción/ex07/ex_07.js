/* Las Funciones Matemáticas en JavaScript utilizando la clase Math 
Estas funcionen permiten realizar operaciones dentro del código. */

var precio = Math.round(399.53); // Se declara la variable con valor decimal la función round la vuelve entero
document.writeln('Precio redondeado: ', precio, '<br>');
console.log('Precio redondeado: ', precio);

var precio = Math.round(399.42);
document.writeln('Precio redondeado: ', precio, '<br>');
console.log('Precio redondeado: ', precio);

var precio = Math.ceil(299.83); // Se declara la variable con valor decimal la función ceil la vuelve entero
document.writeln('Precio redondeado: ', precio, '<br>');
console.log('Precio redondeado: ', precio);

var precio = Math.ceil(299.28); // Se declara la variable con valor decimal la función ceil la vuelve entero al más cercano sin importar el decimal
document.writeln('Precio redondeado: ', precio, '<br>');
console.log('Precio redondeado: ', precio);

var precio = Math.floor(540.93); // Se declara la variable con valor decimal la función floor la vuelve entero
document.writeln('Precio redondeado: ', precio, '<br>');
console.log('Precio redondeado: ', precio);

var seno = Math.sin(45); // Se calcula el seno del ángulo de 45
document.writeln('El valor de seno de un ángulo de 45 es: ', seno, '<br>');
console.log('Seno de 45: ', seno);

var coseno = Math.cos(50); // Se calcula el coseno del ángulo de 50
document.writeln('El valor de seno de un ángulo de 50 es: ', coseno, '<br>');
console.log('Coseno de 50: ', coseno);

var tangente = Math.tan(68); // Se calcula la tangente del ángulo de 68
document.writeln('El valor tangente de un ángulo de 68 es: ', tangente, '<br>');
console.log('Tangente de 68: ', tangente);

var exponencial = Math.exp(2); // Se calcula el exponencial de 2.
document.writeln('Exponencial de 2: ', exponencial, '<br>');
console.log('Exponencial de 2: ', exponencial);

var exponente = Math.pow(4,2); // Esto se traduce como 4 elevado a la 2 (4 por 4 = 16).
document.writeln('Exponente de 4 elevado a la 2: ',exponente, '<br>');
console.log('Exponente de 4 elevado a la 2: ',exponente);

var logaritmo = Math.log(10); // Halla el logaritmo de un número dado
document.writeln('El logaritmo de 10 es: ', logaritmo, '<br>');
console.log('El logaritmo de 10 es: ', logaritmo);

var absoluto = Math.abs(-10); // Calcular el valor absoluto de un número dado
document.writeln('El valor absoluto de -10 es: ', absoluto, '<br>');
console.log('El valor absoluto de -10 es: ', absoluto);

var raiz = Math.sqrt(81); // Calcular la raíz cuadrada de un número
document.writeln('La raíz cuadrada de 81 es: ', raiz, '<br>');
console.log('Raíz de 81 es: ', raiz);

var aleatorio = Math.random(); // Random siempre va desde 0.0 hasta 0.9999999....
document.writeln('El valor aleatorio o random es: ', aleatorio, '<br>');
console.log('El valor aleatorio es: ', aleatorio);

// Fórmula para realizar números random pero con rango y convertidos a entero.
var numRam = Math.floor(Math.random()*(15 - 5 + 1)+ 5);
document.writeln('El valor aleatorio entre 5 y 15 es: ', numRam, '<br>');
console.log('El valor aleatorio entre 5 y 15 es: ', numRam);

/* Para este caso a traves de este esquema de fórmula sucede lo siguiente:
Math.floor(Math.random() * (Max - Min + 1) + Min);

1. Math.random()genera un número decimal entre 0y 1(incluye 0, pero nunca 1). Puede generar valores como 0.0, 0.5, 0.9999999, pero nunca exactamente 1.

2. Se multiplica el random generado por (Max - Min + 1), lo que da el tamaño del rango de números posibles. En este caso: 15 - 5 + 1 = 11, lo que significa que Math.random()se escalará a un valor entre 0 y 10.9999999.

3. Se suma Min para desplazar el rango. Antes de sumar Min, los valores estan entre 0y 10.9999999. Posteriormente, al sumar 5, ahora los valores estarán entre 5y 15.9999999. 

4. Math.floor()redondea hacia abajo para asegurar de obtener solo números enteros. Sin Math.floor(), se obtendrían decimales. Con Math.floor(), cualquier valor entre 5.000000 y 5.999999 se convierte en 5, entre 6.000000 y 6.999999 se convierte en 6, y así sucesivamente hasta 15. 

5. El + 1 en (Max - Min + 1) se utiliza para incluir el límite superior (Max). Sin el + 1, Math.random() solo podría generar números hasta Max - 1. El + 1 permite que Math.random() * (Max - Min + 1) llegue hasta Max, garantizando que Max sea una posibilidad al hacer Math.floor().

Ejemplo:

Si Math.random() genera 0.999999, el cálculo es: 
Math.floor(0.999999 * (15 - 5 + 1) + 5);
1. 0.999999 * 11 = 10.99999
2. 10.99999 + 5 = 15.99999
3. Math.floor(15.99999) = 15✅
Esto confirma que 15 puede ser generado.

Si Math.random()se genera 0, el cálculo es:
Math.floor(0 * (15 - 5 + 1) + 5);
1. 0 * 11 = 0
2. 0 + 5 = 5
3. Math.floor(5) = 5✅
Esto confirma que 5 puede ser generado.
*/
