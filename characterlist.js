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
    //Html de cada carta teniendo en cuenta los elementos que cambian por cada carta segun el personaje
    toCharacterHtml(position) {
      return `
            <div class="character" data-status="${this.status}" data-species="${this.species}" data-gender="${this.gender}" onclick='characterSelected(${position})'>
              <div class="personaje">
                <img src="${this.image}" />
                <div class="descripPersonaje">
                  <h4 class="nombre">${this.name}</h4>
                     <input class="estrellafav" type="checkbox" id="star${this.id}" name="favs${this.id}" value="1" onclick='event.stopPropagation()' >
                     <label for="star${this.id}"  id="star${this.id}label" class="starfav" onclick='event.stopPropagation()'></label>
                     </div>
                  </div>
              </div>
            </div>
          `;
    }
  }