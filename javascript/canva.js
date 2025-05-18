document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('miCanvas');
    const ctx = canvas.getContext('2d');
    const btnCirculo = document.getElementById('btnCirculo');
    const btnRectangulo = document.getElementById('btnRectangulo');
    const btnLimpiar = document.getElementById('btnLimpiar');

    // Función para dibujar un círculo
    function dibujarCirculo() {
        ctx.beginPath();
        ctx.arc(
            Math.random() * canvas.width,  // Posición X aleatoria
            Math.random() * canvas.height, // Posición Y aleatoria
            30,                           // Radio
            0,                            // Angulo inicial
            Math.PI * 2                    // Angulo final (360°)
        );
        ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 50%)`; // Color aleatorio
        ctx.fill();
        ctx.closePath();
    }

    // Función para dibujar un rectángulo
    function dibujarRectangulo() {
        const x = Math.random() * (canvas.width - 100);
        const y = Math.random() * (canvas.height - 60);
        
        ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 50%)`;
        ctx.fillRect(x, y, 100, 60); // (x, y, ancho, alto)
    }

    // Función para limpiar el canvas
    function limpiarCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Event listeners para los botones
    btnCirculo.addEventListener('click', dibujarCirculo);
    btnRectangulo.addEventListener('click', dibujarRectangulo);
    btnLimpiar.addEventListener('click', limpiarCanvas);

    // Dibujar algo al inicio
    dibujarCirculo();
    dibujarRectangulo();
});