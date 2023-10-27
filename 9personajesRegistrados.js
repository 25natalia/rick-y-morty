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

//Renderiza todos los personajes en el div carrusel
function renderAllCharacters(characters) {
    let container = document.getElementById("carrusel")
    container.innerHTML = ""
    for(let i = 0; i < data.length; i++) {
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

  //data viene de las cartas toCharacterHtml
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
    // Limpiar los otros checkboxes de status
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
    // Limpiar los otros checkboxes de species
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
    // Limpiar los otros checkboxes de gender
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