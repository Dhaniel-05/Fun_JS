async function sumar(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num1 !== 'number' || typeof num2 !== 'number') {
                reject(new Error('Alguno de los argumentos no es un número'));
            } else {
                resolve(num1 + num2);
            }
        }, 2000);
    });
    
}

async function manejoErrores() {
    try {
        let resultado = await sumar(5, 35); 
        console.log('Resultado:', resultado);
        
    } catch (error) {
        console.error('Error:', error.message);
        
    }
}

manejoErrores();