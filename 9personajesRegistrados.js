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
    let container = document.getElementById("recommended")
    container.innerHTML = ""
    for(let i = 0; i <= 7; i++) {
        const character = characters[i]
        container.innerHTML += character.toCharacterHtml(i)
    }
}
renderAllCharacters(characters)
