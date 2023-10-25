document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registro-form");

    registroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("registro-email").value;
        const usuario = document.getElementById("registro-usuario").value;
        const telefono = document.getElementById("registro-telefono").value;
        const contrasena = document.getElementById("registro-contrasena").value;

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, ingresa una dirección de correo electrónico válida.");
            return;
        }

        if (usuario.length < 6 || usuario.length > 12) {
            alert("El usuario debe tener entre 6 y 12 caracteres.");
            return;
        }
        
        const phonePattern = /^\d+$/;
    if (!phonePattern.test(telefono) || telefono.length !== 10) {
        alert("El número de teléfono debe contener exactamente 10 números.");
        return;
    }

        if (contrasena.length <= 8 || !/\d/.test(contrasena) || !/[A-Z]/.test(contrasena)) {
            alert("La contraseña debe tener al menos 8 caracteres con al menos un número y al menos una letra mayúscula.");
            return;
        }

        localStorage.setItem("email", email);
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("telefono", telefono);
        localStorage.setItem("contrasena", contrasena);

        document.getElementById("registro-email").value = "";
        document.getElementById("registro-usuario").value = "";
        document.getElementById("registro-telefono").value = "";
        document.getElementById("registro-contrasena").value = "";

        window.location.href = "./6Bienvenido.html";
    });
});
