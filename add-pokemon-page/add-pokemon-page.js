import {addPokemonHeader, addPokemonText, addPokemonImage} from '../data/db.js'

var pokemonName = "";
var pokemonTitle = "";
var pokemonDescription = "";
var pokemonImageLocation="";

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector(".add-pokemon-submit-button")

    submitButton.addEventListener("click", function(){
        console.log("submitting")
        const pokemonName = document.getElementById("pokemonName").value;
        const pokemonTitle = document.getElementById("pokemonTitle").value;
        const pokemonDescription = document.getElementById("pokemonDescription").value;
        const pokemonImageLocation = document.getElementById("pokemonImagePicker").value;
    
        // printValues([pokemonName, pokemonTitle, pokemonDescription, pokemonImageLocation])
        addValuesToDB(pokemonName, pokemonTitle, pokemonDescription, pokemonImageLocation)
    
        resetValues();

        const dict = getPokemonHeaderDict()
        console.log(dict)
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