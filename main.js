// toda la interaccion en html / dom
import { ordenAlfabeticoAZ } from './data.js';
import { ordenAlfabeticoZA } from './data.js';
import { pokePorTipo } from './data.js';
import { pokePorResistencia } from './data.js'
import { statsPoke } from './data.js'
import { statsPoke2 } from './data.js'
import { statsPoke3 } from './data.js'
import { statsPokeSteel } from './data.js'
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
//Para mostrar las tarjetas de Pokemon en la pantalla
const dataDePokemon = data.pokemon;
const ascendente = document.querySelector('#ascendente')
const descendente = document.querySelector('#descendente')
const tipo = document.querySelector('#tipo')
const resistencia = document.querySelector('#resistencia')
const stats = document.querySelector('#stats')
//console.log(dataDePokemon);
let allPokemon = document.getElementById("allpokemon")

function mostrarCaracteristicas(item) {
  return ` <section class="card">
     <img src="${item.img}" alt="" srcset="">
     <h4>${item.num}</h4>
     <h3>${item.name}</h3>
   </section>`
}
llenarTarjetas(dataDePokemon);
function estadicsPoke() {
  const pokeMayoria = statsPoke(dataDePokemon);
  const pokeMayoria2= statsPoke2(dataDePokemon);
  const pokeMinoria= statsPoke3(dataDePokemon);
  const pokeMinoriaSteel= statsPokeSteel(dataDePokemon)
  allPokemon.innerHTML = `<img src="assets/poketransparentes.png" id=imagenEstats alt=""></img>
  <div class="cuadradoPorcentajes">
  <p>Los pokemon de tipo agua representan el : ${pokeMayoria}%<br>
  Los pokemon de tipo hierba representan el: ${pokeMayoria2}%<br>
  Los pokemon de tipo dragon representan el :${pokeMinoria}%<br>
  Los pokemon de tipo acero representan el : ${pokeMinoriaSteel}%</p>
  </div>`
}

//Para el botón ascendente
ascendente.addEventListener('click', () => {
  const pokemonOrden = ordenAlfabeticoAZ(dataDePokemon);
  llenarTarjetas(pokemonOrden);
  document.querySelector('#tipo').value = 'null'
  document.querySelector('#resistencia').value = 'null'
});
//para el botón descendente
descendente.addEventListener('click', () => {
  const pokemonOrdenReverso = ordenAlfabeticoZA(dataDePokemon);
  llenarTarjetas(pokemonOrdenReverso);
  document.querySelector('#tipo').value = 'null'
  document.querySelector('#resistencia').value = 'null'
});
tipo.addEventListener('change', () => {
  const tipoPokemonSeleccionado = document.getElementById('tipo').value;
  const pokemonFiltrado = pokePorTipo(dataDePokemon, tipoPokemonSeleccionado);
  llenarTarjetas(pokemonFiltrado);
  document.querySelector('#resistencia').value = 'null';
  //console.log(pokemonFiltrado);
  //console.log((pokemonFiltrado.length * 100) / 251);
})
resistencia.addEventListener('change', () => {
  const tipoPokemonSeleccionado = document.getElementById('resistencia').value;
  const pokemonFiltrado = pokePorResistencia(dataDePokemon, tipoPokemonSeleccionado);
  llenarTarjetas(pokemonFiltrado);
  document.querySelector('#tipo').value = 'null';
})
//Para sacar estadistica de la mayoria de los pokemon
stats.addEventListener('click', estadicsPoke)


//funcio de llenar de los pokemon
function llenarTarjetas(arrayPokemon) {
  allPokemon.innerHTML = arrayPokemon.map(mostrarCaracteristicas).join(" ");
}




