import {addPokemonHeader, addPokemonText, addPokemonImage} from '../data/db.js'

let pokemonName = "";
let pokemonTitle = "";
let pokemonDescription = "";
let pokemonImageLocation="";

let pokemonList = [];

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".add-pokemon-submit-button")

    submitButton.addEventListener("click", function(){
        pokemonName = document.getElementById("pokemonName").value;
        pokemonTitle = document.getElementById("pokemonTitle").value;
        pokemonDescription = document.getElementById("pokemonDescription").value;
        pokemonImageLocation = document.getElementById("pokemonImagePicker").value;
    
        // printValues([pokemonName, pokemonTitle, pokemonDescription, pokemonImageLocation])
        addValuesToDB(pokemonName, pokemonTitle, pokemonDescription, pokemonImageLocation)
    
        resetValues();


        const container = document.getElementById("here")
        const dict = getPokemonHeaderDict()
        const newElement = document.createElement("p")
        newElement.innerText = dict;
        container.appendChild(newElement)

    })
})

function addValuesToDB(pokemonName, pokemonTitle, pokemonDescription, pokemonImageLocation){
    addPokemonHeader(pokemonName, pokemonTitle)
    addPokemonText(pokemonName, pokemonDescription)
    addPokemonImage(pokemonName, pokemonImageLocation)
}

function printValues(arr) {
    for (const item of arr){
        console.log(item)
    }
}

function resetValues() {
    pokemonName = "";
    pokemonTitle = "";
    pokemonDescription = "";
    pokemonImageLocation="";
}