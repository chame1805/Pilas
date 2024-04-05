// modelo.js
class Modelo {
    constructor() {
        this.operadores = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3};
    }

    convertirAPrefija(expresion) {
        const salida = [];
        const pila = [];

        for (let token of expresion.split('').reverse()) {
            if (/\d/.test(token)) {
                salida.push(token);
            } else if (token === ')') {
                pila.push(token);
            } else if (token === '(') {
                while (pila.length && pila[pila.length - 1] !== ')') {
                    salida.push(pila.pop());
                }
                pila.pop();
            } else {
                while (pila.length && this.operadores[token] <= this.operadores[pila[pila.length - 1]]) {
                    salida.push(pila.pop());
                }
                pila.push(token);
            }
        }

        while (pila.length) {
            salida.push(pila.pop());
        }

        return salida.reverse().join('');
    }
}

export default Modelo;
