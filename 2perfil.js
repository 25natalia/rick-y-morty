//Funcion que se ejecuta apenas se cargue la pagina
document.addEventListener("DOMContentLoaded", function () {

    // Toma la informacion de cuenta iniciada, la convierte de string a objeto
    const storedCuenta = JSON.parse(localStorage.getItem("cuentaIniciada"));
    console.log(storedCuenta)

    // Lo guardado en el local storage como cuentaIniciada.usuario, se renderiza en username
    if (storedCuenta) {
        const usuarioButton = document.getElementById("username");
        usuarioButton.textContent = storedCuenta.usuario;
    }

    // Lo guardado en el local storage como cuentaIniciada.email, se renderiza en email-placeholder
    if (storedCuenta) {
        const emailPlaceholder = document.getElementById("email-placeholder");
        emailPlaceholder.textContent = storedCuenta.email;
    }

    // Lo guardado en el local storage como cuentaIniciada.telefono, se renderiza en telefono-placeholder
    if (storedCuenta) {
        const telefonoPlaceholder = document.getElementById("telefono-placeholder");
        telefonoPlaceholder.textContent = storedCuenta.telefono;
    }

    // Lo guardado en el local storage como cuentaIniciada.contrasena, se renderiza en contrasena-placeholder
    if (storedCuenta) {
        const contrasenaPlaceholder = document.getElementById("contrasena-placeholder");
        contrasenaPlaceholder.textContent = storedCuenta.contrasena;
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

// Funcion para guardar el nuevo email proporcionado en el input del modal por el usuario
guardarCambiosBtn.addEventListener("click", () => {
    const newemail = emailInput.value;
    // El email tiene que tener texto de cualquier tipo + @ con otro texto + . y texto
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Si la condición no se cumple aparece una alerta que advierte al usuario
    if (!emailPattern.test(newemail)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        return;
    }

    // Verificar que el nuevo correo electrónico sea único
    var cuentas = JSON.parse(localStorage.getItem("cuentas"));
    const emailExistente = cuentas.some(account => account.email === newemail);

    if (emailExistente) {
        alert("Este correo electrónico ya está en uso. Por favor, elige otro.");
        return;
    }

    // Continuar con la actualización si el nuevo correo es único
    var storedCuenta = JSON.parse(localStorage.getItem("cuentaIniciada"));
    const cuentaPorEmail = cuentas.find(account => account.email === storedCuenta.email);
    cuentaPorEmail.email = newemail;
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
    storedCuenta.email = newemail;
    localStorage.setItem("cuentaIniciada", JSON.stringify(storedCuenta));

    // Lo recién guardado en el local storage como email, se renderiza en email-placeholder
    const emailPlaceholder = document.getElementById("email-placeholder");
    emailPlaceholder.textContent = storedCuenta.email;
});

//Funcion para guardar el nuevo telefono proporcionado en el input del modal por el usuario
guardarCambiosBtn2.addEventListener("click", () => {
    const newtelefono = telefonoInput.value;
    //El telefono tiene que tener exactamente 10 digitos
    const telefonoPattern = /^\d+$/;
    // SI la condiccion no se cumple aparece una alerta que advierte al usuario y lo pone al tanto de la estructura requerida
    if (!telefonoPattern.test(newtelefono) || newtelefono.length !== 10) {
        alert("El número de teléfono debe contener exactamente 10 números.");
        return;
    }

    var storedCuenta = JSON.parse(localStorage.getItem("cuentaIniciada"));
    var cuentas = JSON.parse(localStorage.getItem("cuentas"));
    const cuentaPorTelefono = cuentas.find(account => account.telefono === storedCuenta.telefono);
    cuentaPorTelefono.telefono = newtelefono;
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
    storedCuenta.telefono = newtelefono;
    localStorage.setItem("cuentaIniciada", JSON.stringify(storedCuenta));

    //Lo recien guardado en el local storage como telefono, se renderiza en telefono-placeholder
    const telefonoPlaceholder = document.getElementById("telefono-placeholder");
    telefonoPlaceholder.textContent = storedCuenta.telefono;
});

//Funcion para guardar la nueva contrasena  proporcionada en el input del modal por el usuario
guardarCambiosBtn3.addEventListener("click", () => {
    const newcontrasena = contrasenaInput.value;
    //la contrasena debe tener al menos un numero
    const contrasenaPattern = /\d/.test(newcontrasena);
    //la contrasena debe tener al menos una letra capital
    const contrasenaCapital = /[A-Z]/.test(newcontrasena);
    //la contrasena debe tener minimo 8 caracteres
    // SI las condiccions no se cumple aparece una alerta que advierte al usuario y lo pone al tanto de la estructura requerida
    if (newcontrasena.length <= 7 || !contrasenaPattern || !contrasenaCapital) {
        alert("La contraseña debe tener al menos 8 caracteres con al menos un número y al menos una letra mayúscula.");
        return;
    }

    var storedCuenta = JSON.parse(localStorage.getItem("cuentaIniciada"));
    var cuentas = JSON.parse(localStorage.getItem("cuentas"));
    const cuentaPorContrasena = cuentas.find(account => account.contrasena === storedCuenta.contrasena);
    cuentaPorContrasena.contrasena = newcontrasena;
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
    storedCuenta.contrasena = newcontrasena;
    localStorage.setItem("cuentaIniciada", JSON.stringify(storedCuenta));

    //Lo recien guardado en el local storage como contrasena, se renderiza en contrasena-placeholder
    const contrasenaPlaceholder = document.getElementById("contrasena-placeholder");
    contrasenaPlaceholder.textContent = storedCuenta.contrasena;
});

// Funcion para guardar el nuevo usuario proporcionado en el input del modal por el usuario
guardarCambiosBtn4.addEventListener("click", () => {
    const newusuario = usuarioInput.value;
    // El usuario debe tener entre 6 y 12 caracteres.
    // Si la condición no se cumple aparece una alerta que advierte al usuario y lo pone al tanto de la estructura requerida
    if (newusuario.length < 6 || newusuario.length > 12) {
        alert("El usuario debe tener entre 6 y 12 caracteres.");
        return;
    }

    // Verificar que el nuevo nombre de usuario sea único
    var cuentas = JSON.parse(localStorage.getItem("cuentas"));
    const usuarioExistente = cuentas.some(account => account.usuario === newusuario);

    if (usuarioExistente) {
        alert("Este nombre de usuario ya está en uso. Por favor, elige otro.");
        return;
    }

    // Continuar con la actualización si el nuevo nombre de usuario es único
    var storedCuenta = JSON.parse(localStorage.getItem("cuentaIniciada"));
    const cuentaPorUsuario = cuentas.find(account => account.usuario === storedCuenta.usuario);
    cuentaPorUsuario.usuario = newusuario;
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
    storedCuenta.usuario = newusuario;
    localStorage.setItem("cuentaIniciada", JSON.stringify(storedCuenta));

    // Lo recién guardado en el local storage como usuario, se renderiza en username
    const usuarioButton = document.getElementById("username");
    usuarioButton.textContent = storedCuenta.usuario;
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

// Función que se ejecuta al oprimir el botón de Cerrar sesion
function cerrarSesion() {

    //Borrar la informacion de cuenta iniciada del local storage
    localStorage.removeItem("cuentaIniciada");

    // Redirige al usuario a la página de bienvenida
    window.location.href = "./index.html";
};