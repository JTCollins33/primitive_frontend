import {getPokemonHeaderDict, getPokemonImageDict, getPokemonTextDict} from '../data/db.js'


const urlParams = new URLSearchParams(window.location.search)
const pokemon = urlParams.get('pokemon')
const container = document.getElementById("pokemon-container")

const POKEMON_HEADER_DICT = getPokemonHeaderDict()
const POKEMON_TEXT_DICT = getPokemonTextDict()
const POKEMON_IMAGE_DICT = getPokemonImageDict()

document.addEventListener("DOMContentLoaded", function(){
    //set up header
    const headerElement = document.createElement("h1")
    headerElement.textContent = POKEMON_HEADER_DICT[pokemon]
    headerElement.className = "pokemon-header"
    headerElement.id = pokemon+"-header"
    container.appendChild(headerElement)

    //set up image
    const imageElement = document.createElement("img")
    imageElement.src = POKEMON_IMAGE_DICT[pokemon]
    imageElement.alt = pokemon
    imageElement.id = "pokemon-image"
    imageElement.className = pokemon+"-image"
    container.appendChild(imageElement)

    //set up text
    const textElement = document.createElement("h4")
    textElement.textContent = POKEMON_TEXT_DICT[pokemon]
    container.appendChild(textElement)
})

