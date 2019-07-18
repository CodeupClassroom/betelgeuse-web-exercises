// fetch("https://api.chucknorris.io/jokes/random")
//     .then(response => response.json())
//     .then(response => console.log(response.value))

let random = Math.floor(Math.random()*70+1);
//
// fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
//     .then(response => response.json())
//     .then(pokemon => console.log(`Pokemon: ${pokemon.name}`))
//
// fetch(`https://swapi.co/api/people/${random}`)
//     .then(response => response.json())
//     .then(character => console.log(`StarWars: ${character.name}`))
//     .catch(error => console.log("No StarWars character found"))
//
//
// fetch(`https://gateway.marvel.com/v1/public/characters/${random}&apikey=${marvelKey}`)

let characterId = "5a109c993dc2080021cd87" + random.toString(16);
console.log(characterId);
fetch(`https://www.potterapi.com/v1/characters?key=${potterKey}`)
    .then(response => response.json())
    .then(response => console.log(response))
    // .catch(error => console.log("No HarryPotter character found."))
    // .then(character => console.log(`HarryPotter Character: ${character.name}`))
    .then(characters => {
        for (let character in characters) console.log(character.name)
    })
