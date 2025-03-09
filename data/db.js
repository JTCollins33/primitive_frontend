const POKEMON_HEADER_DICT = {
    "charizard": "The Flying Dragon: Charizard",
    "venusaur": "The Walking Fortress: Venusaur",
    "blastoise": "The Doubled-up Cannon: Blastoise"
}

const POKEMON_TEXT_DICT = {
    "charizard": "Charizard is known as a fearsome fire type pokemon. Make sure to stay out of his way!",
    "venusaur": "Venusaur is a grass type pokemon that is known for its ability to heal itself. It is a formidable opponent.",
    "blastoise": "Blastoise is a water type pokemon that is known for its ability to shoot water from its cannons. It is a powerful pokemon."
}

const POKEMON_IMAGE_DICT = {
    "charizard": "../images/charizard.png",
    "venusaur": "../images/venusaur.jpg",
    "blastoise": "../images/blastoise.jpg"
}

function addPokemonHeader(pokemonName, header){
    POKEMON_HEADER_DICT[pokemonName] = header
}

function addPokemonText(pokemonName, text){
    POKEMON_TEXT_DICT[pokemonName] = text
}

function addPokemonImage(pokemonName, imagePath){
    POKEMON_IMAGE_DICT[pokemonName] = imagePath
}

export {POKEMON_HEADER_DICT, POKEMON_TEXT_DICT, POKEMON_IMAGE_DICT, addPokemonHeader, addPokemonText, addPokemonImage}