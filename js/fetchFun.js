// Chuck Norris
//     // $.get("https://api.chucknorris.io/jokes/random")
//     //     .done((data) => {
//     //         console.log(data.value);
//     //     })
//     //     .fail((err) => {
//     //         console.error("There was an error");
//     //     })
//
//     $.ajax("https://icanhazdadjoke.com/", {headers:{Accept:"application/json"}})
//         .done(data => console.log(data.joke))
//
// let apiResponse = fetch("https://api.chucknorris.io/jokes/random")
//     .then(response => response.json())
//     .then(data => console.log(data.value))

    // .then(response => console.log(response.value))

// fetch('https://api.github.com/users')
//     .then(response => {
//         console.log(response);
//         return response.json()
//     })
//     .then(jsonified => console.log(jsonified))
    // .then(usersArray => {
    //     for (let user of usersArray) {
    //         console.log(user.html_url);
    //     }
    // })

// Pokemon vs StarWars
let random = Math.ceil(Math.random()*100);
const starWars = fetch(`https://swapi.co/api/people/${random}`)
    .then(response => response.json())
    .then(character => console.log(`StarWars: ${character.name}`))
    .catch(error => console.log("No StarWars character found"))
const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then(response => response.json())
    .then(pokemon => console.log(`Pokemon: ${pokemon.name}`))


// Superhero API
// check out https://superheroapi.com for more fun!

// Harry Potter Universe
// fetch(`https://www.potterapi.com/v1/characters?key=${potterKey}`)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     // .catch(error => console.log("No HarryPotter character found."))
//     // .then(character => console.log(`HarryPotter Character: ${character.name}`))
//     .then(characters => {
//         for (let character in characters) console.log(character.name)
//     })

// Marvel Universe
// let characterId = 1009100 + random;
// fetch(`https://gateway.marvel.com/v1/public/characters/${characterId}&apikey=${marvelKey}`)
