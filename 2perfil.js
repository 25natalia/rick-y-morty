document.addEventListener("DOMContentLoaded", function () {
    
    // Usuario
    const storedUsuario = localStorage.getItem("usuario");

    if (storedUsuario) {
        const usuarioButton = document.getElementById("username");
        usuarioButton.textContent = storedUsuario;
    }

    // Email
    const storedEmail = localStorage.getItem("email");

    if (storedEmail) {
        const emailPlaceholder = document.getElementById("email-placeholder");
        emailPlaceholder.textContent = storedEmail;
    }

    //Telefono
    const storedTelefono = localStorage.getItem("telefono");

    if (storedTelefono) {
        const telefonoPlaceholder = document.getElementById("telefono-placeholder");
        telefonoPlaceholder.textContent = storedTelefono;
    }

    //Contrasena
    const storedContrasena = localStorage.getItem("contrasena");

    if (storedContrasena) {
        const contrasenaPlaceholder = document.getElementById("contrasena-placeholder");
        contrasenaPlaceholder.textContent = storedContrasena;
    }

});


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

guardarCambiosBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        return;
    }
});

guardarCambiosBtn2.addEventListener("click", () => {
    const telefono = telefonoInput.value;
    const telefonoPattern = /^\d+$/;
    if (!telefonoPattern.test(telefono) || telefono.length !== 10) {
        alert("El número de teléfono debe contener exactamente 10 números.");
        return;
    }
});

guardarCambiosBtn3.addEventListener("click", () => {
    const contrasena = contrasenaInput.value;
    const contrasenaPattern = /\d/.test(contrasena);
    const contrasenaCapital= /[A-Z]/.test(contrasena);
    if (contrasena.length <= 8 || !contrasenaPattern.test(contrasena) || !contrasenaCapital.test(contrasena) ) {
        alert("La contraseña debe tener al menos 8 caracteres con al menos un número y al menos una letra mayúscula.");
        return;
    }
});

guardarCambiosBtn4.addEventListener("click", () => {
    const usuario = usuarioInput.value;
    if (usuario.length < 6 || usuario.length > 12(usuario)) {
        alert("El usuario debe tener entre 6 y 12 caracteres.");
        return;
    }
});

//email
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

guardarCambiosBtn.addEventListener("click", () => {
    modal.style.display = "none";
});



//telefono
openModalBtn2.addEventListener("click", () => {
    modal2.style.display = "block";
});

closeModalBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});

guardarCambiosBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
});

//contrasena
openModalBtn3.addEventListener("click", () => {
    modal3.style.display = "block";
});

closeModalBtn3.addEventListener("click", () => {
    modal3.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
});

guardarCambiosBtn3.addEventListener("click", () => {
    modal3.style.display = "none";
});

//usuario
username.addEventListener("click", () => {
    modal4.style.display = "block";
});

closeModalBtn4.addEventListener("click", () => {
    modal4.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal4) {
        modal4.style.display = "none";
    }
});

guardarCambiosBtn4.addEventListener("click", () => {
    modal4.style.display = "none";
});


