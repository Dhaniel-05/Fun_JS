// Ejercicio de análisis: Pedir a un usuario que digite algún tipo de valor
let a = 1;
let suma = 0;
let valor;

while(a <= 3){
    valor = parseInt(prompt('Ingrese tres valores numéricos para sumarlos'));
    suma = suma + valor;
    a++;
}
document.writeln('La suma es: ', suma, '<br>');

//Rifa
let numero;
do{
    numero = parseInt(prompt('¡Rifa!: dame números entre el 1 y el 15'));

    if(numero !=5){
        document.writeln('Usted dió el número: ', numero, '<br>');
    } else {
        document.writeln('¡Genial! has ganado, el número correcto era el: ', numero, ' Reclama tu premio')
    }
} while (numero !=5);