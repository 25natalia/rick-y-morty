document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtén el valor del campo de entrada
        const emailOrUsuario = document.getElementById("emailOrUser").value;
        const password = document.getElementById("password").value;

        let email;
        let usuario;

        // Verifica si el valor contiene "@" para determinar si es un correo electrónico o usuario
        if (emailOrUsuario.includes("@")) {
            // Es un correo electrónico
            email = emailOrUsuario;
        } else {
            // No contiene "@", se asume como un usuario
            usuario = emailOrUsuario;
        }

        // Verifica las credenciales
        if ((email === "tiago123456@gmail.com" || usuario === "tiago123") && password === "12345678") {
            if (email === "tiago123456@gmail.com") {
                // Guarda el correo electrónico en localStorage
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
            } else {
                // Guarda el usuario en localStorage
                localStorage.setItem("usuario", usuario);
                localStorage.setItem("password", password);
            }

            // Limpia los campos de entrada
            document.getElementById("emailOrUser").value = "";
            document.getElementById("password").value = "";

            // Redirige al usuario a "7holadenuevo.html"
            window.location.href = "./7holadenuevo.html";
        } else {
            // Si las credenciales no coinciden, muestra un mensaje de error
            alert("Credenciales incorrectas. Por favor, verifica tu usuario y contraseña.");
        }
    });
});
