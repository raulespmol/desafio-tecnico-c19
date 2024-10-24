const entrenadores = [
  {
    nombre: "Entrenador 1",
    equipo: [
      { nombre: "Charizard", nivel: 25, tipo: "Fuego" },
      { nombre: "Blastoise", nivel: 22, tipo: "Agua" },
      { nombre: "Venusaur", nivel: 28, tipo: "Planta" },
      { nombre: "Pikachu", nivel: 30, tipo: "Eléctrico" },
      { nombre: "Machamp", nivel: 27, tipo: "Pelea" },
      { nombre: "Gengar", nivel: 26, tipo: "Fantasma" }
    ]
  },
  {
    nombre: "Entrenador 2",
    equipo: [
      { nombre: "Typhlosion", nivel: 29, tipo: "Fuego" },
      { nombre: "Feraligatr", nivel: 32, tipo: "Agua" },
      { nombre: "Meganium", nivel: 33, tipo: "Planta" },
      { nombre: "Raichu", nivel: 34, tipo: "Eléctrico" },
      { nombre: "Lucario", nivel: 31, tipo: "Pelea" },
      { nombre: "Mimikyu", nivel: 35, tipo: "Fantasma" }
    ]
  },
  {
    nombre: "Entrenador 3",
    equipo: [
      { nombre: "Arcanine", nivel: 36, tipo: "Fuego" },
      { nombre: "Swampert", nivel: 37, tipo: "Agua" },
      { nombre: "Sceptile", nivel: 38, tipo: "Planta" },
      { nombre: "Electivire", nivel: 39, tipo: "Eléctrico" },
      { nombre: "Gallade", nivel: 40, tipo: "Pelea" },
      { nombre: "Banette", nivel: 41, tipo: "Fantasma" }
    ]
  },
  {
    nombre: "Entrenador 4",
    equipo: [
      { nombre: "Infernape", nivel: 42, tipo: "Fuego" },
      { nombre: "Empoleon", nivel: 43, tipo: "Agua" },
      { nombre: "Torterra", nivel: 44, tipo: "Planta" },
      { nombre: "Luxray", nivel: 45, tipo: "Eléctrico" },
      { nombre: "Conkeldurr", nivel: 46, tipo: "Pelea" },
      { nombre: "Cofagrigus", nivel: 47, tipo: "Fantasma" }
    ]
  },
  {
    nombre: "Entrenador 5",
    equipo: [
      { nombre: "Blaziken", nivel: 48, tipo: "Fuego" },
      { nombre: "Samurott", nivel: 49, tipo: "Agua" },
      { nombre: "Serperior", nivel: 50, tipo: "Planta" },
      { nombre: "Zebstrika", nivel: 51, tipo: "Eléctrico" },
      { nombre: "Mienshao", nivel: 52, tipo: "Pelea" },
      { nombre: "Chandelure", nivel: 53, tipo: "Fantasma" }
    ]
  }
];

//Retornar el pokemon con el mayor nivel y el con el menor nivel entre todos los equipos de los cinco entrenadores.

const mayorYMenorNivel = () => {
  //Arreglo con todos los pokes
  const pokemons = entrenadores.flatMap(e => e.equipo)

  //Arreglo con todos los niveles
  const niveles = pokemons.map(p => p.nivel)

  //Encontrar nivel mayor y nivel menor
  const nivelMayor = Math.max(...niveles)
  const nivelMenor = Math.min(...niveles)

  //Encontrar los pokes con dichos niveles
  const pokemonMayorNivel = pokemons.find(p => p.nivel === nivelMayor)
  const pokemonMenorNivel = pokemons.find(p => p.nivel === nivelMenor)

  return {
    pokemonMayorNivel,
    pokemonMenorNivel
  }
}

// console.log(mayorYMenorNivel())

//Retornar todos los pokemones que contengan un string pasado como argumento. No puede devolver undefined

const buscarPokemon = pokemon => {
  //Arreglo con todos los pokes
  const pokemons = entrenadores.flatMap(e => e.equipo)
  const pokemonBuscado = pokemon.toLocaleLowerCase()
  
  //Arreglo con pokes que coincidan
  const pokemonsEncontrados = pokemons.filter(p => p.nombre.toLocaleLowerCase().includes(pokemonBuscado))

  //Validar si se encontraron pokes
  if(pokemonsEncontrados.length){
    return pokemonsEncontrados
  }

  return "No se encontró ningún pokemon"
}

// console.log(buscarPokemon("C"))

//Retornar el tipo cuyos Pokémon tienen un promedio de nivel mayor.

const tipoConMayorPromedio = () => {
  //Arreglo con todos los pokes
  const pokemons = entrenadores.flatMap(e => e.equipo)

  //Separar pokes por tipo
  const tipos = {}

  pokemons.forEach(p => {
    
  })

  //Calcular promedio de cada tipo

  

  //Encontrar el promedio más alto y su tipo correspondiente

}