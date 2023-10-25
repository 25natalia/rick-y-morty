document.addEventListener("DOMContentLoaded", function () {
    
    // Usuario
    const storedUsuario = localStorage.getItem("usuario");

    if (storedUsuario) {
        const usuarioButton = document.getElementById("username");
        usuarioButton.textContent = storedUsuario;
    }

    //Email
    // Obtén el correo electrónico del almacenamiento local
    const storedEmail = localStorage.getItem("email");

    // Verifica si el correo electrónico se encuentra en el almacenamiento local
    if (storedEmail) {
        // Selecciona el elemento por su ID
        const emailPlaceholder = document.getElementById("email-placeholder");

        // Actualiza el contenido del elemento con el correo electrónico almacenado
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

//telefono
const openModalBtn2 = document.getElementById("openModalBtn2");
const closeModalBtn2 = document.getElementById("closeModalBtn2");
const modal2 = document.getElementById("myModal2");
const guardarCambiosBtn2 = document.getElementById("guardar-cambios2");

//contrasena
const openModalBtn3 = document.getElementById("openModalBtn3");
const closeModalBtn3 = document.getElementById("closeModalBtn3");
const modal3 = document.getElementById("myModal3");
const guardarCambiosBtn3 = document.getElementById("guardar-cambios3");

//usuario
const openModalBtn4 = document.getElementById("username");
const closeModalBtn4 = document.getElementById("closeModalBtn4");
const modal4 = document.getElementById("myModal4");
const guardarCambiosBtn4 = document.getElementById("guardar-cambios4");

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
    if (event.target === modal) {
        modal4.style.display = "none";
    }
});

guardarCambiosBtn4.addEventListener("click", () => {
    modal4.style.display = "none";
});


