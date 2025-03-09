const CHARIZARD_HEADER = "The Flying Dragon: Charizard"
const VENUSAUR_HEADER = "The Walking Fortress: Venusaur"
const BLASTOISE_HEADER = "The Doubled-up Cannon: Blastoise"

const CHARIZARD_TEXT = "Charizard is known as a fearsome fire type pokemon. Make sure to stay out of his way!"
const VENUSAUR_TEXT = "Venusaur is a grass type pokemon that is known for its ability to heal itself. It is a formidable opponent."
const BLASTOISE_TEXT = "Blastoise is a water type pokemon that is known for its ability to shoot water from its cannons. It is a powerful pokemon."

const CHARIZARD_IMAGE_LOC = "../images/charizard.png"
const VENUSAUR_IMAGE_LOC = "../images/venusaur.jpg"
const BLASTOISE_IMAGE_LOC = "../images/blastoise.jpg"


const POKEMON_HEADER_DICT = {
    "charizard": CHARIZARD_HEADER,
    "venusaur": VENUSAUR_HEADER,
    "blastoise": BLASTOISE_HEADER
}

const POKEMON_TEXT_DICT = {
    "charizard": CHARIZARD_TEXT,
    "venusaur": VENUSAUR_TEXT,
    "blastoise": BLASTOISE_TEXT
}

const POKEMON_IMAGE_DICT = {
    "charizard": CHARIZARD_IMAGE_LOC,
    "venusaur": VENUSAUR_IMAGE_LOC,
    "blastoise": BLASTOISE_IMAGE_LOC
}

console.log("in the pokemon page")


const urlParams = new URLSearchParams(window.location.search)
const pokemon = urlParams.get('pokemon')
const container = document.getElementById("pokemon-container")

document.addEventListener("DOMContentLoaded", function(){
    //set up header
    const headerElement = document.createElement("h1")
    headerElement.textContent = POKEMON_HEADER_DICT[pokemon]
    headerElement.className = pokemon+"-header"
    container.appendChild(headerElement)

    //set up image
    const imageElement = document.createElement("img")
    imageElement.src = POKEMON_IMAGE_DICT[pokemon]
    imageElement.alt = pokemon
    imageElement.className = pokemon+"-image"
    container.appendChild(imageElement)

    //set up text
    const textElement = document.createElement("h4")
    textElement.textContent = POKEMON_TEXT_DICT[pokemon]
    container.appendChild(textElement)
})

