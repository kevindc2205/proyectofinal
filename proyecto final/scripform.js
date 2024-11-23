function calcularPuntuacion(event) {
    event.preventDefault(); // Evitar el envío del formulario

    let puntuacion = 0;

    // Pregunta 1
    if (document.querySelector('input[name="pregunta1"]:checked')?.value === 'correcta') {
        puntuacion += 5;
    }

    // Pregunta 2
    if (document.querySelector('input[name="pregunta2"]:checked')?.value === 'correcta') {
        puntuacion += 5;
    }

    // Pregunta 3
    if (document.querySelector('select[name="pregunta3"]').value === 'correcta') {
        puntuacion += 5;
    }

    // Pregunta 4
    if (document.querySelector('input[name="pregunta4"]:checked')?.value === 'correcta') {
        puntuacion += 5;
    }

    // Pregunta 5
    if (document.querySelector('input[name="pregunta5"]:checked')?.value === 'correcta') {
        puntuacion += 5;
    }

    // Pregunta 6
    const checkboxes = document.querySelectorAll('input[name="pregunta6"]:checked');
    const correctas = ['rojo', 'amarillo'];
    const respuestasCorrectas = [...checkboxes].filter(checkbox => correctas.includes(checkbox.value)).length;
    if (respuestasCorrectas === correctas.length) {
        puntuacion += 5;
    }

    // Pregunta 7
    if (document.querySelector('input[name="pregunta7"]:checked')?.value === 'correcta') {
        puntuacion += 5;
    }

    // Pregunta 8
    if (document.querySelector('input[name="pregunta8"]:checked')?.value === 'correcta') {
        puntuacion += 5;
    }

    // Mostrar resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Tu puntuación es: ${puntuacion} puntos.`;
    resultadoDiv.style.display = 'block';
}