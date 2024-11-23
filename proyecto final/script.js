function validarLogin(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    if (usuario === 'alumno' && contraseña === '2024') {
        window.location.href = 'bienvenido.html'; // Redirigir a la página de bienvenida
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
}