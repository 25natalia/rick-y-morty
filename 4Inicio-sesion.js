document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtén los valores de los campos de entrada
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Verifica las credenciales
        if (email === "tiago123456@gmail.com" && password === "12345678") {
            // Guarda los datos en localStorage
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            // Limpia los campos de entrada
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";

            // Redirige al usuario a "7holadenuevo.html"
            window.location.href = "./7holadenuevo.html";
        } else {
            // Si las credenciales no coinciden, muestra un mensaje de error
            alert("Credenciales incorrectas. Por favor, verifica tu email y contraseña.");
        }
    });
});