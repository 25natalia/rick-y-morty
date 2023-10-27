class Character {

    constructor(id, name, status, species, type, gender, origin, location, image) {

        this.id = id
        this.name = name
        this.status = status
        this.species = species
        this.type = type
        this.gender = gender
        this.origin = origin
        this.location = location
        this.image = image
        this.active = true

    }

    toCharacterHtml(position) {
        return `
          <div class="character" data-status="${this.status}" onclick='characterSelected(${position})'>
            <div class="personaje">
              <img src="${this.image}" />
              <div class="descripPersonaje">
                <h4 class="nombre">${this.name}</h4>
                <img src="./estrella 1.png" alt="">
                <button class="more-info-button">Más info</button>
                </div>
            </div>
          </div>
        `;
      }
    }

