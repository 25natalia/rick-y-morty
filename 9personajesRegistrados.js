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

