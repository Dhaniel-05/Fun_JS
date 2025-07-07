let e, f, suma, resta, multi, divide, potencia;

e = parseFloat(prompt('Ingrese el valor de e: '));
f = parseFloat(prompt('Ingrese el valor de f: '));

let areaTriangulo = (e*f)/2;

suma = e + f;
resta = e - f;
multi = e * f;
divide = e / f;
potencia = e ** f;

console.log('El resultado de la suma es: ', suma);
console.log('El resultado de la resta es: ', resta);
console.log('El resultado de la multiplicación es: ', multi);
console.log('El resultado de la división es: ', divide);
console.log('El resultado de la potencia es: ', potencia);
console.log('El resultado del cálculo del área de un tríangulo es: ', areaTriangulo);