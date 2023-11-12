document.addEventListener("DOMContentLoaded", function () {
    const cuentaIniciada = JSON.parse(localStorage.getItem("cuentaIniciada"));

    if (!cuentaIniciada) {
        // No hay cuenta iniciada
        document.getElementById("navegacion").innerHTML = `
        <nav>
            <a href="./index.html"><img src="./Rick_and_Morty.svg.png" height="50px" width="150px"></a>
            <div class="link">
                <a class="linknav" href="./10personajesNoRegistrado.html">Personajes</a>
                <a id="sn" href="./3sobrenosotrosResgistrado">Sobre nosotros</a>
                <a class="linknav" href="./5registro.html">Registrarse</a>
                <a class="linknav" href="./4Inicio-sesion.html">Iniciar de sesión</a>
            </div>
        </nav>
        `;
    } else {
        // Hay cuenta iniciada
        document.getElementById("navegacion").innerHTML = `
            <nav>
                <a href="./7holadenuevo.html"><img src="./Rick_and_Morty.svg.png" height="50px" width="150px"></a>
                <div class="link">
                    <a class="linknav" href="./8favorites.html">Favoritos</a>
                    <a class="linknav" href="./9personajesRegistrado.html">Personajes</a>
                    <a class="linknav" id="sn" href="./3sobrenosotrosRegistrado.html">Sobre nosotros</a>
                </div>
                <a href="./2perfil.html">
                    <div id="perfil" ></div>
                </a>
            </nav>
        `;
    }
});
