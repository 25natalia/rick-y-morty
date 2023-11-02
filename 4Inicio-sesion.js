//Funcion que se ejecuta apenas se cargue la pagina
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    //Funcion que se ejecuta al oprimir el boton de login
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        //Permite que se registre en el mismo campo o con email o con usuario
        const emailOrUsuario = document.getElementById("emailOrUser").value;
        const password = document.getElementById("password").value;

        // Comprobar si se ha registrado con email o usuario
        let storedEmail = localStorage.getItem("email");
        let storedUsuario = localStorage.getItem("usuario");

        //Comprueba si el input proporcionado por el usuario corresponde ya sea con el  email o el usuario guardados en local storage, si sí  corresponden, se pasa a comprobar la contrasena comparandola con la guardad en el local storage
        if (emailOrUsuario === storedEmail || emailOrUsuario === storedUsuario) {
            let storedPassword = localStorage.getItem("contrasena");

            if (password === storedPassword) {
                // SI las credenciales son correctas

                // Limpia los campos de entrada
                document.getElementById("emailOrUser").value = "";
                document.getElementById("password").value = "";

                // Redirige al usuario a la pagina de bienvenido de nuevo
                window.location.href = "./7holadenuevo.html";
            } else {
                //SI la contraseña es incorrecta, aparece una alerta que advierte al usuario
                alert("Contraseña incorrecta. Por favor, verifica tu contraseña.");
            }
        } else {
            // SI el Email o el usuario es incorrecto, , aparece una alerta que advierte al usuario (se pasa directamente a esto si se determina que no es correcto )
            alert("Email o Usuario incorrecto. Por favor, verifica tus credenciales.");
        }
    });
});