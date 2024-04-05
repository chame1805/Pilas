import Controlador from './src/controlador.js';

// Esperar a que el DOM se cargue completamente antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Event listener para el botón
    const button = document.getElementById('convertirBtn');
    if (button) {
        button.addEventListener('click', Controlador.convertir);
    } else {
        console.error("El botón 'convertirBtn' no se encontró en el documento.");
    }
});
