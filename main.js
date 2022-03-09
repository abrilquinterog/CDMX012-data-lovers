// toda la interaccion en html / dom
import { ordenAlfabeticoAZ } from './data.js';
import { ordenAlfabeticoZA } from './data.js';
import { pokePorTipo } from './data.js';
import { pokePorResistencia } from './data.js'
import { statsPoke } from './data.js'
import { statsPoke2 } from './data.js'
import { statsPoke3 } from './data.js'
import { statsPokeSteel } from './data.js'
import { estadisticasGrafica } from './data.js'
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
//import {Chart} from 'chart.js'; 
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
  const pokeMayoria2 = statsPoke2(dataDePokemon);
  const pokeMinoria = statsPoke3(dataDePokemon);
  const pokeMinoriaSteel = statsPokeSteel(dataDePokemon)
  allPokemon.innerHTML = `<img src="assets/poketransparente.png" id=imagenEstats alt=""></img>
  <div class="cuadradoPorcentajes">
  <p>Aqui algunos porcentajes de los tipos de Pokemon <br>
  <br>
  Los pokemon de tipo agua representan el : ${pokeMayoria}%<br>
  Los pokemon de tipo hierba representan el: ${pokeMayoria2}%<br>
  Los pokemon de tipo dragon representan el :${pokeMinoria}%<br>
  Los pokemon de tipo acero representan el : ${pokeMinoriaSteel}%<br> 
  <br>
  En la grafica podrás observar cuantos Pokemon de cada tipo. <br> </p> 
  <canvas id="myChart" width="400" height="400"></canvas>`;
  estadisticasGrafica(dataDePokemon, 'water');
  const data = {
    datasets: [{
      data: [
        estadisticasGrafica(dataDePokemon, 'steel').length,
        estadisticasGrafica(dataDePokemon, 'water').length,
        estadisticasGrafica(dataDePokemon, 'bug').length,
        estadisticasGrafica(dataDePokemon, 'dragon').length,
        estadisticasGrafica(dataDePokemon, 'electric').length,
        estadisticasGrafica(dataDePokemon, 'ghost').length,
        estadisticasGrafica(dataDePokemon, 'fire').length,
        estadisticasGrafica(dataDePokemon, 'fairy').length,
        estadisticasGrafica(dataDePokemon, 'ice').length,
        estadisticasGrafica(dataDePokemon, 'grass').length,
        estadisticasGrafica(dataDePokemon, 'fighting').length,
        estadisticasGrafica(dataDePokemon, 'normal').length,
        estadisticasGrafica(dataDePokemon, 'psychic').length,
        estadisticasGrafica(dataDePokemon, 'rock').length,
        estadisticasGrafica(dataDePokemon, 'dark').length,
        estadisticasGrafica(dataDePokemon, 'ground').length,
        estadisticasGrafica(dataDePokemon, 'poison').length,
        estadisticasGrafica(dataDePokemon, 'flying').length,
      ],
      backgroundColor: [
        '#9FA2A2',
        '#01C5DF',
        '##900C3F',
        '#DF0701',
        '#FF33F3',
        '#1C425B',
        '#5B1C4A',
        '#4D1C5B',
        '#82ADE5',
        '#E58882',
        '#E5A582',
        '#EAD293',
        '#955D0C',
        '#754A0C',
        '#FFF81C',
        '#FF963D',
        '#50D7E2',
        '#E250D7',
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      "steel",
      "water",
      "bug",
      "dragon",
      "electric",
      "ghost",
      "fire",
      "fairy",
      "ice",
      "grass",
      "fighting",
      "normal",
      "psychic",
      "rock",
      "dark",
      "ground",
      "poison",
      "flying"
    ],
    
  
    options: {
      plugins: {
legend:{
  labels:{
    font: {
      size:20
    }
  }
}
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "white",
          }
        }]
      }
    }
  };
  console.log(data)
  
  Chart.defaults.color='#ffffff';
  const ctx = document.getElementById('myChart').getContext('2d');
  const myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    scaleFontColor:'#ffffff '
  });
  console.log(myDoughnutChart)
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




