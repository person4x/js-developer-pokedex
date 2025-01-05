document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemon = JSON.parse(urlParams.get('pokemon'));

    document.getElementById('pokemonName').innerText = pokemon.name;
    document.getElementById('pokemonPhoto').src = pokemon.photo;
    document.getElementById('pokemonNumber').innerText = `Number: ${pokemon.number}`;
    document.getElementById('pokemonTypes').innerText = `Type: ${pokemon.types.join(', ')}`;
});