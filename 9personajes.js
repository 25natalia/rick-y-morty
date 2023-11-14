let characters = [];

// Función para cambiar el estado de favorito de un personaje
function toggleFavorite(characterId) {
  const cuentaIniciada = JSON.parse(localStorage.getItem("cuentaIniciada")) || { favoritos: [] };

  // Asegurarse de que cuentaIniciada.favoritos sea un array
  cuentaIniciada.favoritos = cuentaIniciada.favoritos || [];

  const personajeFavorito = cuentaIniciada.favoritos.find(fav => fav === characterId);

  if (personajeFavorito) {
    // Si el personaje ya está en favoritos, lo removemos
    cuentaIniciada.favoritos = cuentaIniciada.favoritos.filter(fav => fav !== characterId);
  } else {
    // Si el personaje no está en favoritos, lo agregamos
    cuentaIniciada.favoritos.push(characterId);
  }

  // Actualizamos la cuenta iniciada en el local storage
  localStorage.setItem("cuentaIniciada", JSON.stringify(cuentaIniciada));

  // También actualizamos la lista de favoritos en la lista de cuentas
  const cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
  const cuentaEncontrada = cuentas.find(account => account.email === cuentaIniciada.email);

  if (cuentaEncontrada) {
    cuentaEncontrada.favoritos = cuentaIniciada.favoritos;
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
  }

  // Actualizar el estado del botón de favorito en la UI
  const starCheckbox = document.getElementById(`star${characterId}`);
  if (starCheckbox) {
    starCheckbox.checked = !personajeFavorito; // Invertir el estado del checkbox
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const cuentaIniciada = JSON.parse(localStorage.getItem("cuentaIniciada"));
    
  //cambia la carta en funcion de si hay cuenta Iniciada o no
  function characterToHtml(character, position) {
    if (!cuentaIniciada) {
      return `
              <div class="character" data-position="${position}" data-status="${character.status}" data-species="${character.species}" data-gender="${character.gender}" onclick='openCharacterModal(${position})'>
                  <div class="personaje">
                      <img src="${character.image}" />
                      <div class="descripPersonaje">
                          <h4 class="nombre">${character.name}</h4>
                      </div>
                  </div>
              </div>
          `;
    } else {
      return `
              <div class="character" data-position="${position}" data-status="${character.status}" data-species="${character.species}" data-gender="${character.gender}" onclick='openCharacterModal(${position})'>
                  <div class="personaje">
                      <img src="${character.image}" />
                      <div class="descripPersonaje">
                          <h4 class="nombre">${character.name}</h4>
                          <input class="estrellafav" type="checkbox" id="star${character.id}" name="favs${character.id}" value="1" onclick='event.stopPropagation(); toggleFavorite(${character.id})' >
                          <label for="star${character.id}"  id="star${character.id}label" class="starfav"  onclick='event.stopPropagation()'></label>
                      </div>
                  </div>
              </div>
          `;
    }
  }

  //cambia de barra en funcion de si hay cuenta Iniciada o no
  if (!cuentaIniciada) {
    // No hay cuenta iniciada
    document.getElementById("navegacion").innerHTML = `
      <nav>
          <a href="./index.html"><img src="./Rick_and_Morty.svg.png" height="50px" width="150px"></a>
          <div class="link">
              <a class="linknav" id="sn" href="./9personajes.html">Personajes</a>
              <a class="linknav" href="./3sobrenosotros.html">Sobre nosotros</a>
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
                  <a class="linknav" href="./8favoritos.html">Favoritos</a>
                  <a class="linknav" id="sn" href="./9personajes.html">Personajes</a>
                  <a class="linknav" href="./3sobrenosotros.html">Sobre nosotros</a>
              </div>
              <a href="./2perfil.html">
                  <div id="perfil" ></div>
              </a>
          </nav>
      `;
  }

  //cambia el div de id=arriba de la pagina en funcion de si hay cuenta Iniciada o no
  if (!cuentaIniciada) {
    // No hay cuenta iniciada
    document.getElementById("arriba").innerHTML = `
    <h1 id="personajes">Personajes</h1>
      `;
  } else {
    // Hay cuenta iniciada
    document.getElementById("arriba").innerHTML = `
    <h1 id="personajes">Personajes</h1>
    <a href="./8favoritos.html"><img src="./Estrella principal.png" alt=""></a>
      `;
  }


  //saca los characters del api
  async function fetchRickAndMorty() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const json = await response.json();
    characters = json.results;

    // Llama a la función para renderizar los personajes después de obtener los datos
    renderAllCharacters(characters);
  }

  // Llama a la función para obtener los datos cuando se carga la página
  fetchRickAndMorty();

  //Renderiza todos los personajes en el div carrusel segun el la estructura de las cartas
  function renderAllCharacters(characters) {
    let container = document.getElementById("carrusel");
    container.innerHTML = "";
    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];
      container.innerHTML += characterToHtml(character, i);
    }
  }

  
});

// Función para aplicar los filtros
function applyFilters() {
  const charactersElements = document.querySelectorAll('.character');
  const selectedStatus = document.querySelector('input[name="status"]:checked');
  const selectedSpecies = document.querySelector('input[name="species"]:checked');
  const selectedGender = document.querySelector('input[name="gender"]:checked');

  //data viene de las cartas toCharacterHtml (esta data no se renderiza en las cartas pero se encuentra en el div de estas y tambien cambia segun cada carta)
  charactersElements.forEach((characterElement) => {
    const character = characters[parseInt(characterElement.getAttribute('data-position'))];
    const status = character.status;
    const species = character.species;
    const gender = character.gender;

    const statusMatches = !selectedStatus || status === selectedStatus.value;
    const speciesMatches = !selectedSpecies || species === selectedSpecies.value;
    const genderMatches = !selectedGender || gender === selectedGender.value;

    if (statusMatches && speciesMatches && genderMatches) {
      characterElement.style.display = 'block';
    } else {
      characterElement.style.display = 'none';
    }
  });
}

// Agrega un evento change a los checkboxes de status
const statusCheckboxes = document.querySelectorAll('input[name="status"]');
statusCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    // Cuando se selcciona un checkbox de status, se limpian los otros checkboxes de status
    statusCheckboxes.forEach((cb) => {
      if (cb !== checkbox) {
        cb.checked = false;
      }
    });
    applyFilters();
  });
});

// Agrega un evento change a los checkboxes de species
const speciesCheckboxes = document.querySelectorAll('input[name="species"]');
speciesCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    // Cuando se selcciona un checkbox de species, se limpian los otros checkboxes de species
    speciesCheckboxes.forEach((cb) => {
      if (cb !== checkbox) {
        cb.checked = false;
      }
    });
    applyFilters();
  });
});

// Agrega un evento change a los checkboxes de gender
const genderCheckboxes = document.querySelectorAll('input[name="gender"]');
genderCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    // Cuando se selcciona un checkbox de gender, se limpian los otros checkboxes de gender
    genderCheckboxes.forEach((cb) => {
      if (cb !== checkbox) {
        cb.checked = false;
      }
    });
    applyFilters();
  });
});

// Llama a applyFilters() para mostrar todos los personajes al cargar la página
applyFilters();

// Funcion para abrir el modal
function openCharacterModal(index) {
  const modal = document.getElementById("myModal");
  const character = characters[index];

  // Renderiza el contenido del modal con la información del personaje selecionado en la carta
  const modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = `
    <div id="info">
    <div id
    ="texto">
      <h1>${character.name}</h1>
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
      <p>Gender: ${character.gender}</p>
      <p>Origin: ${character.origin.name}</p>
      <p>Location: ${character.location.name}</p>
      </div>
    <img src="${character.image}" alt="${character.name}" class="imagen">
      </div>
    `;

  modal.style.display = "flex";

  // Funcion para cerrar el modal al dar click afuera
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Agrega un evento clic a los botones a cada carta de personaje
const moreInfoButtons = document.querySelectorAll(".character");
moreInfoButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    openCharacterModal(index);
  });
});


//Estrellitas
// Obtén todas las etiquetas de las estrellas y los checkboxes
const estrellas = document.querySelectorAll('estrellafav');
const checkboxes = document.querySelectorAll('input[class="sratfav"]');

// Recorre todas las estrellas y agrega un evento de clic a cada una
estrellas.forEach((estrella, index) => {
  estrella.addEventListener('click', function() {
    // Marca o desmarca el checkbox correspondiente cuando se hace clic en la estrella
    checkboxes[index].checked = !checkboxes[index].checked;

    // Guarda el estado de las estrellas en el almacenamiento local
    const estrellasMarcadas = [];
    checkboxes.forEach(checkbox => {
      estrellasMarcadas.push(checkbox.checked);
    });
    localStorage.setItem('estrellasMarcadas', JSON.stringify(estrellasMarcadas));
  });
});

// Recupera el estado de las estrellas del almacenamiento local cuando se carga la página
window.addEventListener('load', function() {
  const estrellasMarcadas = JSON.parse(localStorage.getItem('estrellasMarcadas')) || [];
  estrellasMarcadas.forEach((marcada, index) => {
    checkboxes[index].checked = marcada;
  });
});
