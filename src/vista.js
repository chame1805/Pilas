// vista.js
class Vista {
    mostrarResultado(resultado) {
        document.getElementById('resultado').innerText = "Resultado: " + resultado;
    }
}

// Exportar la clase Vista para que esté disponible para otros archivos
export default Vista;
