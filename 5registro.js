//Funcion que se ejecuta apenas se cargue la pagina
document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registro-form");

    // Función que se ejecuta al oprimir el botón de crear cuenta
    registroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Variables tomadas de los inputs proporcionados por el usuario
        const email = document.getElementById("registro-email").value;
        const usuario = document.getElementById("registro-usuario").value;
        const telefono = document.getElementById("registro-telefono").value;
        const contrasena = document.getElementById("registro-contrasena").value;

        // Requisitos para la información proporcionada

        // El email tiene que tener el formato correcto
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, ingresa una dirección de correo electrónico válida.");
            return;
        }

        // El usuario tiene que tener entre 6 y 12 caracteres.
        if (usuario.length < 6 || usuario.length > 12) {
            alert("El usuario debe tener entre 6 y 12 caracteres.");
            return;
        }

        // El teléfono tiene que tener exactamente 10 dígitos
        const phonePattern = /^\d+$/;
        if (!phonePattern.test(telefono) || telefono.length !== 10) {
            alert("El número de teléfono debe contener exactamente 10 dígitos.");
            return;
        }

        // La contraseña tiene que tener al menos 8 caracteres con al menos un número y al menos una letra mayúscula.
        if (contrasena.length <= 8 || !/\d/.test(contrasena) || !/[A-Z]/.test(contrasena)) {
            alert("La contraseña debe tener al menos 8 caracteres con al menos un número y al menos una letra mayúscula.");
            return;
        }

        // Se obtiene el objeto de cuentas almacenado en el local storage, si no existe se crea uno vacío
        const cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];

        // Se verifica si ya existe una cuenta con el mismo usuario
        const existingUsuario = cuentas.find(account => account.usuario === usuario);
        if (existingUsuario) {
            alert("Este usuario ya está registrado. Por favor, utiliza otro usuario");
            return;
        }

        // Se verifica si ya existe una cuenta con el mismo email
        const existingEmail = Object.values(cuentas).find(account => account.email === email);
        if (existingEmail) {
            alert("Este correo electrónico ya está registrado. Por favor, utiliza otro correo electrónico.");
            return;
        }

        // Se guarda la información de la cuenta en el objeto de cuentas
        cuentas.push({ email:email, usuario:usuario, telefono:telefono, contrasena:contrasena });

        // Se guarda el objeto de cuentas actualizado en el local storage
        localStorage.setItem("cuentas", JSON.stringify(cuentas));

        // Se limpian los campos
        document.getElementById("registro-email").value = "";
        document.getElementById("registro-usuario").value = "";
        document.getElementById("registro-telefono").value = "";
        document.getElementById("registro-contrasena").value = "";

        // Redirige a la página de bienvenido
        window.location.href = "./6Bienvenido.html";
    });
});
