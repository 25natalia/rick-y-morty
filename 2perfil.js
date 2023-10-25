document.addEventListener("DOMContentLoaded", function () {
    
    //Email

    // Obtén el correo electrónico del almacenamiento local
    const storedEmail = localStorage.getItem("email");

    // Verifica si el correo electrónico se encuentra en el almacenamiento local
    if (storedEmail) {
        // Selecciona el elemento <p> por su ID
        const emailPlaceholder = document.getElementById("email-placeholder");

        // Actualiza el contenido del elemento <p> con el correo electrónico almacenado
        emailPlaceholder.textContent = storedEmail;
    }

    //Usuario
    const storedUser = localStorage.getItem("usuario");

    // Verifica si el correo electrónico se encuentra en el almacenamiento local
    if (storedUser) {
        // Selecciona el elemento <p> por su ID
        const UserPlaceholder = document.getElementById("username");

        // Actualiza el contenido del elemento <p> con el correo electrónico almacenado
        UserPlaceholder.textContent = storedUser;
    }
});



const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const guardarCambiosBtn = document.getElementById("guardar-cambios");

//2
const openModalBtn2 = document.getElementById("openModalBtn2");
const closeModalBtn2 = document.getElementById("closeModalBtn2");
const modal2 = document.getElementById("myModal2");
const guardarCambiosBtn2 = document.getElementById("guardar-cambios2");

//3
const openModalBtn3 = document.getElementById("openModalBtn3");

const modal3 = document.getElementById("myModal3");
const guardarCambiosBtn3 = document.getElementById("guardar-cambios3");

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


//2
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

//3
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