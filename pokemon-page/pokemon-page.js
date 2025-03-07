const urlParams = new URLSearchParams(window.location.search)
const pokemon = urlParams.get('pokemon')
console.log(pokemon)