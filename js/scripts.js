let pokemonRepository = (function () {
  let pokemonList = [
    { name: "balbasure", height: 7, types: ["grass", "poison"] },
    { name: "Arbok", height: 3.5, types: ["fire", "eletric"] },
    { name: "beedrill", height: 1, types: ["psychic", "flying"] },
  ];
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonRepository.add({
  name: "Alberto",
  height: 5,
  types: ["water", "poison"],
});
//for (let i = 0; i < pokemonList.length; i++) {
pokemonRepository.getAll().forEach(function (pokemon) {
  let color = "";
  //for(let k = 0; k < pokemon.types.length; k++){
  pokemon.types.forEach(function (type) {
    if (type == "grass") {
      color = '<span style="color:green;"> ';
    } else if (type == "fire") {
      color = '<span style="color:red;"> ';
    } else if (type == "flying") {
      color = '<span style="color:lightblue;"> ';
    } else if (type == "water") {
      color = '<span style="color:blue;"> ';
    }
  });

  let size = "";
  if (pokemon.height > 5) {
    size = "WOw! It's a big Pokemon!";
  } else if (pokemon.height < 3) {
    size = "This is a small Pokemon!";
  } else {
    size = "It's a medium Pokemon!";
  }
  document.write(
    '<div class= "box">' +
      pokemon.name +
      "  (height:" +
      pokemon.height +
      ")" +
      "<br>" +
      size +
      color +
      pokemon.types +
      "<br>" +
      "</div>"
  );
});
