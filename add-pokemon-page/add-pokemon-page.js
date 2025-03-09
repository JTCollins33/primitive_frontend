import {addPokemonHeader, addPokemonText, addPokemonImage} from '../data/db.js'

var pokemonName = "";
var pokemonTitle = "";
var pokemonDescription = "";
var pokemonImageLocation="";

submitButton = document.getElementsByClassName("add-pokemon-submit-button")[0]
console.log(submitButton)

submitButton.addEventListener("click", function(){
    console.log("submitting")
    const pokemonName = document.getElementById("pokemonName").value;
    const pokemonTitle = document.getElementById("pokemonTitle").value;
    const pokemonDescription = document.getElementById("pokemonDescription").value;
    const pokemonImageLocation = document.getElementById("pokemonImagePicker").value;

    // printValues([pokemonName, pokemonTitle, pokemonDescription, pokemonImageLocation])
    addValuesToDB(pokemonName, pokemonTitle, pokemonDescription, pokemonImageLocation)

    resetValues();
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