let characters = []
for (let i = 0; i < data.length; i++) {
  const characterJson = data[i]
  const character = new Character(
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

//Renderiza todos los personajes en el div carrusel segun el la estructura de las cartas
function renderAllCharacters(characters) {
  let container = document.getElementById("carrusel")
  container.innerHTML = ""
  for (let i = 0; i < data.length; i++) {
    const character = characters[i]
    container.innerHTML += character.toCharacterHtml(i)
  }
}
renderAllCharacters(characters)

// Función para aplicar los filtros
function applyFilters() {
  const characters = document.querySelectorAll('.character');
  const selectedStatus = document.querySelector('input[name="status"]:checked');
  const selectedSpecies = document.querySelector('input[name="species"]:checked');
  const selectedGender = document.querySelector('input[name="gender"]:checked');

  //data viene de las cartas toCharacterHtml (esta data no se renderiza en las cartas pero se encuentra en el div de estas y tambien cambia segun cada carta)
  characters.forEach((character) => {
    const status = character.getAttribute('data-status');
    const species = character.getAttribute('data-species');
    const gender = character.getAttribute('data-gender');

    const statusMatches = !selectedStatus || status === selectedStatus.value;
    const speciesMatches = !selectedSpecies || species === selectedSpecies.value;
    const genderMatches = !selectedGender || gender === selectedGender.value;

    if (statusMatches && speciesMatches && genderMatches) {
      character.style.display = 'block';
    } else {
      character.style.display = 'none';
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
  const closeModalBtn = document.getElementById("closeModalBtn");
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