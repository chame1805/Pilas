import Modelo from './modelo.js'; // Importa la clase Modelo desde modelo.js
import Vista from './vista.js'; // Importa la clase Vista desde vista.js

const Controlador = {
    convertir: function() {
        const expresion = document.getElementById('expresion').value;
        const modelo = new Modelo(); // Crea una instancia de la clase Modelo
        const resultado = modelo.convertirAPrefija(expresion); // Usa el método convertirAPrefija
        const vista = new Vista(); // Crea una instancia de la clase Vista
        vista.mostrarResultado(resultado); // Usa el método mostrarResultado de la instancia de Vista
    }
};

export default Controlador;
