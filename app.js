import {getPokemonImageDict} from './data/db.js'

const POKEMON_IMAGE_DICT = getPokemonImageDict()
const pokemonGrid = document.getElementsByClassName("pokemon-grid")[0]

for(let [pokemonName, pokemonImageLocation] of Object.entries(POKEMON_IMAGE_DICT)){
    const aElement = document.createElement('a')
    aElement.href="/pokemon-page/pokemon-page.html?pokemon="+pokemonName
    const imageElement = document.createElement('img')
    imageElement.className = "pokemon-image"
    imageElement.src = pokemonImageLocation.substring(1, pokemonImageLocation.length)

    aElement.appendChild(imageElement)
    pokemonGrid.appendChild(aElement)
}