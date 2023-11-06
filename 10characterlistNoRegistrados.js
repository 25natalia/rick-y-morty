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

    //Html de cada carta teniendo en cuenta los elementos que cambian por cada carta segun el personaje sin la estrella de favoritos
    toCharacterHtml(position) {
        return `
            <div class="character" data-status="${this.status}" data-species="${this.species}" data-gender="${this.gender}" onclick='characterSelected(${position})'>
              <div class="personaje">
                <img src="${this.image}" />
                <div class="descripPersonaje">
                  <h4 class="nombre">${this.name}</h4>
                  </div>
              </div>
            </div>
          `;
    }
}