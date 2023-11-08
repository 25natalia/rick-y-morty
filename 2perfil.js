//Funcion que se ejecuta apenas se cargue la pagina
document.addEventListener("DOMContentLoaded", function () {

    // Usuario
    const storedUsuario = localStorage.getItem("usuario");

    // Lo guardado en el local storage como usuario, se renderiza en username
    if (storedUsuario) {
        const usuarioButton = document.getElementById("username");
        usuarioButton.textContent = storedUsuario;
    }

    // Email
    const storedEmail = localStorage.getItem("email");

    // Lo guardado en el local storage como email, se renderiza en email-placeholder
    if (storedEmail) {
        const emailPlaceholder = document.getElementById("email-placeholder");
        emailPlaceholder.textContent = storedEmail;
    }

    //Telefono
    const storedTelefono = localStorage.getItem("telefono");

    // Lo guardado en el local storage como telefono, se renderiza en telefono-placeholder
    if (storedTelefono) {
        const telefonoPlaceholder = document.getElementById("telefono-placeholder");
        telefonoPlaceholder.textContent = storedTelefono;
    }

    //Contrasena
    const storedContrasena = localStorage.getItem("contrasena");

    // Lo guardado en el local storage como contrasena, se renderiza en contrasena-placeholder
    if (storedContrasena) {
        const contrasenaPlaceholder = document.getElementById("contrasena-placeholder");
        contrasenaPlaceholder.textContent = storedContrasena;
    }

});

//Declaracion de variables
//email
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const guardarCambiosBtn = document.getElementById("guardar-cambios");
const emailInput = document.getElementById("input");

//telefono
const openModalBtn2 = document.getElementById("openModalBtn2");
const closeModalBtn2 = document.getElementById("closeModalBtn2");
const modal2 = document.getElementById("myModal2");
const guardarCambiosBtn2 = document.getElementById("guardar-cambios2");
const telefonoInput = document.getElementById("input2");

//contrasena
const openModalBtn3 = document.getElementById("openModalBtn3");
const closeModalBtn3 = document.getElementById("closeModalBtn3");
const modal3 = document.getElementById("myModal3");
const guardarCambiosBtn3 = document.getElementById("guardar-cambios3");
const contrasenaInput = document.getElementById("input3");

//usuario
const openModalBtn4 = document.getElementById("username");
const closeModalBtn4 = document.getElementById("closeModalBtn4");
const modal4 = document.getElementById("myModal4");
const guardarCambiosBtn4 = document.getElementById("guardar-cambios4");
const usuarioInput = document.getElementById("input4");

//Funcion para guardar el nuevo email proporcionado en el input del modal por el usuario
guardarCambiosBtn.addEventListener("click", () => {
    const email = emailInput.value;
    //El email tiene que tener texto de cualquier tipo+@ con otro texto + . y texto
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // SI la condiccion no se cumple aparece una alerta que advierte al usuario
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        return;
    }
    //Se guarda la informacion proporcionada en el input en el local storage en email, esto hace que se sobreescriba sobre lo anterior mente guardado y lo reemplace
    localStorage.setItem("email", email);
    //Lo recien guardado en el local storage como email, se renderiza en email-placeholder
    const emailPlaceholder = document.getElementById("email-placeholder");
    emailPlaceholder.textContent = email;
});

//Funcion para guardar el nuevo telefono proporcionado en el input del modal por el usuario
guardarCambiosBtn2.addEventListener("click", () => {
    const telefono = telefonoInput.value;
    //El telefono tiene que tener exactamente 10 digitos
    const telefonoPattern = /^\d+$/;
    // SI la condiccion no se cumple aparece una alerta que advierte al usuario y lo pone al tanto de la estructura requerida
    if (!telefonoPattern.test(telefono) || telefono.length !== 10) {
        alert("El número de teléfono debe contener exactamente 10 números.");
        return;
    }
    //Se guarda la informacion proporcionada en el input en el local storage en telefono, esto hace que se sobreescriba sobre lo anterior mente guardado y lo reemplace
    localStorage.setItem("telefono", telefono);
    //Lo recien guardado en el local storage como telefono, se renderiza en telefono-placeholder
    const telefonoPlaceholder = document.getElementById("telefono-placeholder");
    telefonoPlaceholder.textContent = telefono;
});

//Funcion para guardar la nueva contrasena  proporcionada en el input del modal por el usuario
guardarCambiosBtn3.addEventListener("click", () => {
    const contrasena = contrasenaInput.value;
    //la contrasena debe tener al menos un numero
    const contrasenaPattern = /\d/.test(contrasena);
    //la contrasena debe tener al menos una letra capital
    const contrasenaCapital = /[A-Z]/.test(contrasena);
    //la contrasena debe tener minimo 8 caracteres
    // SI las condiccions no se cumple aparece una alerta que advierte al usuario y lo pone al tanto de la estructura requerida
    if (contrasena.length <= 8 || !contrasenaPattern || !contrasenaCapital) {
        alert("La contraseña debe tener al menos 8 caracteres con al menos un número y al menos una letra mayúscula.");
        return;
    }

    //Se guarda la informacion proporcionada en el input en el local storage en contrasena, esto hace que se sobreescriba sobre lo anterior mente guardado y lo reemplace
    localStorage.setItem("contrasena", contrasena);
    //Lo recien guardado en el local storage como contrasena, se renderiza en contrasena-placeholder
    const contrasenaPlaceholder = document.getElementById("contrasena-placeholder");
    contrasenaPlaceholder.textContent = contrasena;
});

//Funcion para guardar el nuevo usuario  proporcionado en el input del modal por el usuario
guardarCambiosBtn4.addEventListener("click", () => {
    const usuario = usuarioInput.value;
    //El usuario tienen que tener entre 6 y 12 caracteres.
    // SI la condiccion no se cumple aparece una alerta que advierte al usuario y lo pone al tanto de la estructura requerida
    if (usuario.length < 6 || usuario.length > 12) {
        alert("El usuario debe tener entre 6 y 12 caracteres.");
        return;
    }

    //Se guarda la informacion proporcionada en el input en el local storage en usuario, esto hace que se sobreescriba sobre lo anterior mente guardado y lo reemplace
    localStorage.setItem("usuario", usuario);
    //Lo recien guardado en el local storage como usuario, se renderiza en username
    const usuarioButton = document.getElementById("username");
    usuarioButton.textContent = usuario;
});

//email
//Funcion para abrir el modal de email al hundir el boton Actualizar email
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

//Funcion para cerrar el modal de email al hundir el boton de x
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

//Funcion para cerrar el modal de email al hundir por fuera del modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

//telefono
//Funcion para abrir el modal de telefono al hundir el boton Actualizar telefono
openModalBtn2.addEventListener("click", () => {
    modal2.style.display = "block";
});

//Funcion para cerrar el modal de telefono al hundir el boton de x
closeModalBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
});

//Funcion para cerrar el modal de telefono al hundir por fuera del modal
window.addEventListener("click", (event) => {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});

//contrasena
//Funcion para abrir el modal de contrasena al hundir el boton Cambiar contrasena
openModalBtn3.addEventListener("click", () => {
    modal3.style.display = "block";
});

//Funcion para cerrar el modal de contrasena al hundir el boton de x
closeModalBtn3.addEventListener("click", () => {
    modal3.style.display = "none";
});

//Funcion para cerrar el modal de contrasena al hundir por fuera del modal
window.addEventListener("click", (event) => {
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
});

//usuario
//Funcion para abrir el modal de usuario al hundir el boton donde esta el nombre de usuario
username.addEventListener("click", () => {
    modal4.style.display = "block";
});

//Funcion para cerrar el modal de usuario al hundir el boton de x
closeModalBtn4.addEventListener("click", () => {
    modal4.style.display = "none";
});

//Funcion para cerrar el modal de usuario al hundir por fuera del modal
window.addEventListener("click", (event) => {
    if (event.target === modal4) {
        modal4.style.display = "none";
    }
});