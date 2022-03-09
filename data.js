// estas funciones son de ejemplo

export const ordenAlfabeticoAZ = dataDePokemon => {
  let ordenar = dataDePokemon.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    if (a == b) {
      return 0;
    }
  });
  return ordenar;
};

export const ordenAlfabeticoZA = dataDePokemon => {
  let ordenarInverso = dataDePokemon.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    if (a == b) {
      return 0;
    }
  });
  return ordenarInverso;
  
};

export const pokePorTipo = (dataDePokemon, tipoPokemonSeleccionado)=>{ 
   let filtroTipo = dataDePokemon.filter(item=>item.type.includes(tipoPokemonSeleccionado));
return filtroTipo;
}

export const pokePorResistencia= (dataDePokemon, resistenciaPokeSeleccionada)=>{
  let filtroResistencia =dataDePokemon.filter(item =>item.resistant.includes(resistenciaPokeSeleccionada));
  return filtroResistencia;
}
//Para sacar los pokemon mas abundantes 01
export const statsPoke=(dataDePokemon)=>{
  let filtroMayoria=dataDePokemon.filter(item=>item.type.includes("water"));
  return parseInt((filtroMayoria.length*100)/251);

}
 //Para sacar los pokemones mas abundantes en segundo lugar
export const statsPoke2=(dataDePokemon)=>{
  let filtroMayoria=dataDePokemon.filter(item=>item.type.includes("grass"));
  return parseInt((filtroMayoria.length*100)/251);}

//Para sacar los mas escasos 01 
  export const statsPoke3=(dataDePokemon)=>{
    let filtroMayoria=dataDePokemon.filter(item=>item.type.includes("dragon"));
    return parseInt((filtroMayoria.length*100)/251);}

//Para sacar los mas escasos 02 
export const statsPokeSteel=(dataDePokemon)=>{
  let filtroMayoria=dataDePokemon.filter(item=>item.type.includes("steel"));
  return parseInt((filtroMayoria.length*100)/251);}


//items.sort(function (a, b) {