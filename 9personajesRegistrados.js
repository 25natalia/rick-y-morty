let characters = []
for(let i = 0; i < data.length; i++) {
    const characterJson = data[i]
    const character = new Character (
            characterJson.id, 
            characterJson.name,
            characterJson.status, 
            characterJson.species,
            characterJson.type,  
            characterJson.gender,
            characterJson.origin,
            characterJson.location,
            characterJson.image,
            )
    characters.push(character)      
}

function renderAllCharacters(characters) {
    let container = document.getElementById("carrusel")
    container.innerHTML = ""
    for(let i = 0; i < data.length; i++) {
        const character = characters[i]
        container.innerHTML += character.toCharacterHtml(i)
    }
}
renderAllCharacters(characters)


const filtroAlive = document.getElementById('filtro-alive');
const filtroDead = document.getElementById('filtro-dead');
const filtroUnknown = document.getElementById('filtro-unknown');

filtroAlive.addEventListener('change', () => {
  filterCharacters();
});

filtroDead.addEventListener('change', () => {
  filterCharacters();
});

filtroUnknown.addEventListener('change', () => {
  filterCharacters();
});

function filterCharacters() {
  const characters = document.querySelectorAll('.character');
  const selectedStatus = [];

  if (filtroAlive.checked) {
    selectedStatus.push('Alive');
  }
  if (filtroDead.checked) {
    selectedStatus.push('Dead');
  }
  if (filtroUnknown.checked) {
    selectedStatus.push('unknown');
  }

  if (selectedStatus.length === 0) {
    // Si no se selecciona ningún filtro, mostrar todos los personajes.
    characters.forEach((character) => {
      character.style.display = 'block';
    });
  } else {
    // Ocultar todos los personajes.
    characters.forEach((character) => {
      character.style.display = 'none';
    });

    // Mostrar solo los personajes que coinciden con los estados seleccionados.
    characters.forEach((character) => {
      const status = character.getAttribute('data-status');
      if (selectedStatus.includes(status)) {
        character.style.display = 'block';
      }
    });
  }
}

// Llama a filterCharacters para mostrar los personajes en la carga inicial.
filterCharacters();

// Agrega un evento change a los checkboxes de especies
document.getElementById("human-filter").addEventListener("change", applyFilters);
document.getElementById("alien-filter").addEventListener("change", applyFilters);

// Función para aplicar los filtros
function applyFilters() {
  const humanFilter = document.getElementById("human-filter").checked;
  const alienFilter = document.getElementById("alien-filter").checked;

  // Filtra los personajes en base a los checkboxes seleccionados
  const filteredCharacters = data.filter((character) => {
    if (humanFilter && alienFilter) {
      // Mostrar todos los personajes si ambos filtros están seleccionados
      return true;
    } else if (humanFilter) {
      return character.species === "Human";
    } else if (alienFilter) {
      return character.species === "Alien";
    }
    // Mostrar el personaje si no se ha seleccionado ningún filtro
    return true;
  });

  // Limpia el carrusel antes de agregar las cartas filtradas
  const carrusel = document.getElementById("carrusel");
  carrusel.innerHTML = "";

  // Agrega las cartas filtradas al carrusel
  filteredCharacters.forEach((character, index) => {
    const characterCard = new Character(
      character.id,
      character.name,
      character.status,
      character.species,
      character.type,
      character.gender,
      character.origin,
      character.location,
      character.image
    );
    carrusel.innerHTML += characterCard.toCharacterHtml(index);
  });
}

// Llama a applyFilters() para mostrar todos los personajes al cargar la página
applyFilters();

// Agrega eventos "change" a los checkboxes de género
document.getElementById("male-filter").addEventListener("change", apply1Filters);
document.getElementById("female-filter").addEventListener("change", apply1Filters);

// Función para aplicar los filtros
function apply1Filters() {
  const maleFilter = document.getElementById("male-filter").checked;
  const femaleFilter = document.getElementById("female-filter").checked;

  // Filtra los personajes en base a los checkboxes seleccionados
  const filteredCharacters = data.filter((character) => {
    if (maleFilter && femaleFilter) {
      // Mostrar todos los personajes si ningún filtro está seleccionado
      return true;
    }

    let shouldShow = true;

    if (maleFilter) {
      shouldShow = shouldShow && character.gender === "Male";
    }

    if (femaleFilter) {
      shouldShow = shouldShow && character.gender === "Female";
    }

    return shouldShow;
  });

  // Limpia el carrusel antes de agregar las cartas filtradas
  const carrusel = document.getElementById("carrusel");
  carrusel.innerHTML = "";

  // Agrega las cartas filtradas al carrusel
  filteredCharacters.forEach((character, index) => {
    const characterCard = new Character(
      character.id,
      character.name,
      character.status,
      character.species,
      character.type,
      character.gender,
      character.origin,
      character.location,
      character.image
    );
    carrusel.innerHTML += characterCard.toCharacterHtml(index);
  });
}

// Llama a applyFilters() para mostrar todos los personajes al cargar la página
apply1Filters();


// ... Tu código anterior ...

function openCharacterModal(index) {
    const modal = document.getElementById("myModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const character = characters[index];

    // Actualiza el contenido del modal con la información del personaje
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = `
    <div id="info">
    <div id="imagen">
    <img src="${character.image}" alt="${character.name}">
    </div>
    <div id="texto">
      <h1>${character.name}</h1>
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
      <p>Type: ${character.type}</p>
      <p>Gender: ${character.gender}</p>
      <p>Origin: ${character.origin.name}</p>
      <p>Location: ${character.location.name}</p>
      </div>
      </div>
    `;

    modal.style.display = "block";

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Agrega un evento clic a los botones "Más info"
const moreInfoButtons = document.querySelectorAll(".descripPersonaje button");
moreInfoButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        openCharacterModal(index);
    });
});
