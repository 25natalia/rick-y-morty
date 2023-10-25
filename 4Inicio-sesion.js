document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailOrUsuario = document.getElementById("emailOrUser").value;
        const password = document.getElementById("password").value;

        // Comprobar si se ha registrado con email
        let storedEmail = localStorage.getItem("email");
        let storedUsuario = localStorage.getItem("usuario");

        if (emailOrUsuario === storedEmail || emailOrUsuario === storedUsuario) {
            let storedPassword = localStorage.getItem("contrasena");
            
            if (password === storedPassword) {
                // Las credenciales son correctas

                // Limpia los campos de entrada
                document.getElementById("emailOrUser").value = "";
                document.getElementById("password").value = "";

                // Redirige al usuario a "7holadenuevo.html"
                window.location.href = "./7holadenuevo.html";
            } else {
                // Contraseña incorrecta
                alert("Contraseña incorrecta. Por favor, verifica tu contraseña.");
            }
        } else {
            // Email o Usuario incorrecto
            alert("Email o Usuario incorrecto. Por favor, verifica tus credenciales.");
        }
    });
});
