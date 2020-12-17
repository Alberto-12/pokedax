let pokemonList = [
  { name: "balbasure", height: 7, types: ["grass", "poison"] },
  { name: "Arbok", height: 3.5, types: ["fire", "eletric"] },
  { name: "beedrill", height: 1, types: ["psychic", "flying"] },
];

for (let i = 0; i < pokemonList.length; i++) {
  document.write(
      '<div class= "box">'+
      pokemonList[i].name +
     "  (height:" +
      pokemonList[i].height+
      ")"+
      "<br>"+
      pokemonList[i].types+
      "<br>"+
      "</div>");

}
