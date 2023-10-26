class Characters {

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

    toCharcterHtml(position) {
        return `
        <div class="character" onclick='characterSelected(${position})'>
            <h2>${this.name}</h2>
            <img 
            height="120"
            alt="character" 
            src="${this.image[0]}"/>
            <div class="images">
                <img 
            height="40"
            alt="character" 
            src="${this.image[0]}"/>
            <img 
            height="40"
            alt="character" 
            src="${this.image[1]}"/>
            <img 
            height="40"
            alt="character" 
            src="${this.image[2]}"/>
            </div>
            <label>${this.status}</label>
            <p>${this.species}</p>
            <label>$ ${this.gender}</label>
        </div>
        `
    }

}