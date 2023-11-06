//Funcion que se ejecuta apenas se cargue la pagina
document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registro-form");

    //Funcion que se ejecuta al oprimir el boton de crear cuenta
    registroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        //Variables tomadas de los inputs proporcionados por el usuario
        const email = document.getElementById("registro-email").value;
        const usuario = document.getElementById("registro-usuario").value;
        const telefono = document.getElementById("registro-telefono").value;
        const contrasena = document.getElementById("registro-contrasena").value;

        //El email tiene que tener texto de cualquier tipo+@ con otro texto + . y texto
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        // SI la condiccion no se cumple aparece una alerta que advierte al usuario
        if (!emailPattern.test(email)) {
            alert("Por favor, ingresa una dirección de correo electrónico válida.");
            return;
        }

        //El usuario tienen que tener entre 6 y 12 caracteres.
        if (usuario.length < 6 || usuario.length > 12) {
            // SI la condiccion no se cumple aparece una alerta que advierte al usuario y lo pone al tanto de la estructura requerida
            alert("El usuario debe tener entre 6 y 12 carácteres.");
            return;
        }

        //El telefono tiene que tener exactamente 10 digitos
        const phonePattern = /^\d+$/;
        if (!phonePattern.test(telefono) || telefono.length !== 10) {
            // SI la condiccion no se cumple aparece una alerta que advierte al usuario y lo pone al tanto de la estructura requerida
            alert("El número de teléfono debe contener exactamente 10 dígitos.");
            return;
        }

        //La contrasena tiene que tener al menos 8 caracteres con al menos un número y al menos una letra mayúscula.
        if (contrasena.length <= 8 || !/\d/.test(contrasena) || !/[A-Z]/.test(contrasena)) {
            alert("La contraseña debe tener al menos 8 carácteres con al menos un número y al menos una letra mayúscula.");
            return;
        }

        //Se guarda la informacion proporcionada en los inputs en el local storage en las variables correspondientes a cada uno
        localStorage.setItem("email", email);
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("telefono", telefono);
        localStorage.setItem("contrasena", contrasena);

        //Se limpian los campos
        document.getElementById("registro-email").value = "";
        document.getElementById("registro-usuario").value = "";
        document.getElementById("registro-telefono").value = "";
        document.getElementById("registro-contrasena").value = "";

        //al hundir el boton de crear cuenta, redirige a la pagina de bienvenido
        window.location.href = "./6Bienvenido.html";
    });
});