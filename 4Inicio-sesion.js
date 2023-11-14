document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    // Función que se ejecuta al oprimir el botón de login
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Permite que se registre en el mismo campo o con email o con usuario
        const emailOrUsuario = document.getElementById("emailOrUser").value;
        const password = document.getElementById("password").value;

        // Se obtiene el objeto de cuentas almacenado en el local storage, si no existe se crea uno vacío
        const cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

        // Buscar si existe una cuenta con el email proporcionado
        const cuentaPorEmail = cuentas.find(account => account.email === emailOrUsuario);

        // Buscar si existe una cuenta con el usuario proporcionado
        const cuentaPorUsuario = cuentas.find(account => account.usuario === emailOrUsuario);

        // Verificar si la cuenta con el email o usuario proporcionado existe
        const cuentaEncontrada = cuentaPorEmail || cuentaPorUsuario;

        if (cuentaEncontrada) {
            // Si se encuentra la cuenta, se compara la contraseña
            if (password === cuentaEncontrada.contrasena) {
                // Si las credenciales son correctas

                // Limpia los campos de entrada
                document.getElementById("emailOrUser").value = "";
                document.getElementById("password").value = "";

                //Cuenta con la que se logueo
                localStorage.setItem("cuentaIniciada", JSON.stringify(cuentaEncontrada));
                
                // Redirige al usuario a la página de bienvenida
                window.location.href = "./7holadenuevo.html";
            } else {
                // Si la contraseña es incorrecta, aparece una alerta que advierte al usuario
                alert("Contraseña incorrecta. Por favor, verifica tu contraseña.");
            }
        } else {
            // Si el email o el usuario es incorrecto, aparece una alerta que advierte al usuario
            alert("Email o Usuario incorrecto. Por favor, verifica tus credenciales.");
        }
    });
});
