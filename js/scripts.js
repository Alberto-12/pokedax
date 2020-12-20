let pokemonList = [
  { name: "balbasure", height: 7, types: ["grass", "poison"] },
  { name: "Arbok", height: 3.5, types: ["fire", "eletric"] },
  { name: "beedrill", height: 1, types: ["psychic", "flying"] },
];

for (let i = 0; i < pokemonList.length; i++) {

  let color = ""
  for(let k = 0; k < pokemonList[i].types.length; k++){
    if(pokemonList[i].types[k] == "grass"){
      color= '<span style="color:green;"> ';
    }else if(pokemonList[i].types[k] == "fire"){
      color= '<span style="color:red;"> ';
    }else if(pokemonList[i].types[k] == "flying"){
      color= '<span style="color:lightblue;"> ';
    }
  }

  let size = ""
  if (pokemonList[i].height > 5){
    size = "WOw! It's a big Pokemon!"
  }else if(pokemonList[i].height < 3){
    size = "This is a small Pokemon!"
  }else{
    size = "It's a medium Pokemon!"
  }
  document.write(
    '<div class= "box">' +
      pokemonList[i].name +
      "  (height:" +
      pokemonList[i].height +
      ")" +
      "<br>" +
      size +
      color + 
      pokemonList[i].types +
      "<br>" +
      "</div>"
  );
}

