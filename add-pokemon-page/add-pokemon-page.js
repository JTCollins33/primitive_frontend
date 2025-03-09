var pokemonName = "";
var pokemonTitle = "";
var pokemonDescription = "";
var pokemonImageLocation="";

submitButton = document.getElementsByClassName("add-pokemon-submit-button")[0]

submitButton.addEventListener("click", function(){
    const pokemonName = document.getElementById("pokemonName").value;
    const pokemonTitle = document.getElementById("pokemonTitle").value;
    const pokemonDescription = document.getElementById("pokemonDescription").value;
    const pokemonImageLocation = document.getElementById("pokemonImagePicker").value;

    printValues([pokemonName, pokemonTitle, pokemonDescription, pokemonImageLocation])

    resetValues();
})

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