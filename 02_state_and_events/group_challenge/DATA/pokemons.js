// export const pokemons = [];
// const url = "https://pokeapi.co/api/v2/pokemon?limit=209";

// export default function fetchPokemons() {
//   fetch(url)
//     .then((r) => r.json())
//     .then((data) => {
//       data.results.forEach((data) => fetchIndividual(data.url));
//     });
// }

// function fetchIndividual(url) {
//   fetch(url)
//     .then((r) => r.json())
//     .then((data) => {
//       const pokeObj = {
//         name: data.name,
//         image: data.sprites.other.dream_world.front_default,
//         pokeType: data.types[0].type.name,
//       };

//       pokemons.push(pokeObj);
//     });
// }

export const pokemons = [
  {
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    pokeType: "grass",
  },
  {
    name: "ivysaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    pokeType: "grass",
  },
  {
    name: "venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    pokeType: "grass",
  },
  {
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
    pokeType: "fire",
  },
  {
    name: "charmeleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
    pokeType: "fire",
  },
  {
    name: "squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
    pokeType: "water",
  },
  {
    name: "wartortle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
    pokeType: "water",
  },
  {
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
    pokeType: "fire",
  },
  {
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
    pokeType: "water",
  },
  {
    name: "caterpie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
    pokeType: "bug",
  },
  {
    name: "metapod",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
    pokeType: "bug",
  },
  {
    name: "butterfree",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
    pokeType: "bug",
  },
  {
    name: "weedle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
    pokeType: "bug",
  },
  {
    name: "kakuna",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
    pokeType: "bug",
  },
  {
    name: "beedrill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
    pokeType: "bug",
  },
  {
    name: "pidgey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
    pokeType: "normal",
  },
  {
    name: "pidgeotto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
    pokeType: "normal",
  },
  {
    name: "pidgeot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
    pokeType: "normal",
  },
  {
    name: "spearow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg",
    pokeType: "normal",
  },
  {
    name: "fearow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
    pokeType: "normal",
  },
  {
    name: "raichu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",
    pokeType: "electric",
  },
  {
    name: "rattata",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
    pokeType: "normal",
  },
  {
    name: "raticate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
    pokeType: "normal",
  },
  {
    name: "nidorina",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg",
    pokeType: "poison",
  },
  {
    name: "nidorino",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg",
    pokeType: "poison",
  },
  {
    name: "ekans",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg",
    pokeType: "poison",
  },
  {
    name: "arbok",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
    pokeType: "poison",
  },
  {
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
    pokeType: "electric",
  },
  {
    name: "ninetales",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",
    pokeType: "fire",
  },
  {
    name: "sandshrew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg",
    pokeType: "ground",
  },
  {
    name: "sandslash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg",
    pokeType: "ground",
  },
  {
    name: "oddish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/43.svg",
    pokeType: "grass",
  },
  {
    name: "gloom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/44.svg",
    pokeType: "grass",
  },
  {
    name: "nidoran-f",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg",
    pokeType: "poison",
  },
  {
    name: "vileplume",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
    pokeType: "grass",
  },
  {
    name: "venonat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/48.svg",
    pokeType: "bug",
  },
  {
    name: "nidoran-m",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg",
    pokeType: "poison",
  },
  {
    name: "vulpix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",
    pokeType: "fire",
  },
  {
    name: "arcanine",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg",
    pokeType: "fire",
  },
  {
    name: "wigglytuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
    pokeType: "normal",
  },
  {
    name: "zubat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/41.svg",
    pokeType: "poison",
  },
  {
    name: "golbat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/42.svg",
    pokeType: "poison",
  },
  {
    name: "paras",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/46.svg",
    pokeType: "bug",
  },
  {
    name: "bellsprout",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/69.svg",
    pokeType: "grass",
  },
  {
    name: "parasect",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/47.svg",
    pokeType: "bug",
  },
  {
    name: "weepinbell",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/70.svg",
    pokeType: "grass",
  },
  {
    name: "venomoth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/49.svg",
    pokeType: "bug",
  },
  {
    name: "nidoqueen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
    pokeType: "poison",
  },
  {
    name: "diglett",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/50.svg",
    pokeType: "ground",
  },
  {
    name: "victreebel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/71.svg",
    pokeType: "grass",
  },
  {
    name: "dugtrio",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/51.svg",
    pokeType: "ground",
  },
  {
    name: "meowth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg",
    pokeType: "normal",
  },
  {
    name: "nidoking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
    pokeType: "poison",
  },
  {
    name: "persian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/53.svg",
    pokeType: "normal",
  },
  {
    name: "psyduck",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg",
    pokeType: "water",
  },
  {
    name: "clefairy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
    pokeType: "fairy",
  },
  {
    name: "ponyta",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/77.svg",
    pokeType: "fire",
  },
  {
    name: "golduck",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/55.svg",
    pokeType: "water",
  },
  {
    name: "clefable",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",
    pokeType: "fairy",
  },
  {
    name: "magnemite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/81.svg",
    pokeType: "electric",
  },
  {
    name: "primeape",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg",
    pokeType: "fighting",
  },
  {
    name: "growlithe",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/58.svg",
    pokeType: "fire",
  },
  {
    name: "doduo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/84.svg",
    pokeType: "normal",
  },
  {
    name: "dodrio",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/85.svg",
    pokeType: "normal",
  },
  {
    name: "poliwag",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/60.svg",
    pokeType: "water",
  },
  {
    name: "jigglypuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg",
    pokeType: "normal",
  },
  {
    name: "poliwhirl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/61.svg",
    pokeType: "water",
  },
  {
    name: "poliwrath",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/62.svg",
    pokeType: "water",
  },
  {
    name: "abra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/63.svg",
    pokeType: "psychic",
  },
  {
    name: "dewgong",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/87.svg",
    pokeType: "water",
  },
  {
    name: "kadabra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg",
    pokeType: "psychic",
  },
  {
    name: "machop",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/66.svg",
    pokeType: "fighting",
  },
  {
    name: "machoke",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/67.svg",
    pokeType: "fighting",
  },
  {
    name: "machamp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/68.svg",
    pokeType: "fighting",
  },
  {
    name: "shellder",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/90.svg",
    pokeType: "water",
  },
  {
    name: "cloyster",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/91.svg",
    pokeType: "water",
  },
  {
    name: "tentacool",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/72.svg",
    pokeType: "water",
  },
  {
    name: "voltorb",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg",
    pokeType: "electric",
  },
  {
    name: "tentacruel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/73.svg",
    pokeType: "water",
  },
  {
    name: "electrode",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/101.svg",
    pokeType: "electric",
  },
  {
    name: "geodude",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/74.svg",
    pokeType: "rock",
  },
  {
    name: "graveler",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/75.svg",
    pokeType: "rock",
  },
  {
    name: "exeggutor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/103.svg",
    pokeType: "grass",
  },
  {
    name: "golem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/76.svg",
    pokeType: "rock",
  },
  {
    name: "rapidash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/78.svg",
    pokeType: "fire",
  },
  {
    name: "mankey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/56.svg",
    pokeType: "fighting",
  },
  {
    name: "magneton",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/82.svg",
    pokeType: "electric",
  },
  {
    name: "farfetchd",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/83.svg",
    pokeType: "normal",
  },
  {
    name: "seel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/86.svg",
    pokeType: "water",
  },
  {
    name: "grimer",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/88.svg",
    pokeType: "poison",
  },
  {
    name: "muk",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/89.svg",
    pokeType: "poison",
  },
  {
    name: "alakazam",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/65.svg",
    pokeType: "psychic",
  },
  {
    name: "gastly",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg",
    pokeType: "ghost",
  },
  {
    name: "haunter",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg",
    pokeType: "ghost",
  },
  {
    name: "onix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/95.svg",
    pokeType: "rock",
  },
  {
    name: "drowzee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/96.svg",
    pokeType: "psychic",
  },
  {
    name: "hypno",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/97.svg",
    pokeType: "psychic",
  },
  {
    name: "krabby",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/98.svg",
    pokeType: "water",
  },
  {
    name: "kingler",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/99.svg",
    pokeType: "water",
  },
  {
    name: "exeggcute",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/102.svg",
    pokeType: "grass",
  },
  {
    name: "cubone",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/104.svg",
    pokeType: "ground",
  },
  {
    name: "marowak",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/105.svg",
    pokeType: "ground",
  },
  {
    name: "hitmonlee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/106.svg",
    pokeType: "fighting",
  },
  {
    name: "hitmonchan",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/107.svg",
    pokeType: "fighting",
  },
  {
    name: "slowpoke",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/79.svg",
    pokeType: "water",
  },
  {
    name: "slowbro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg",
    pokeType: "water",
  },
  {
    name: "gengar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",
    pokeType: "ghost",
  },
  {
    name: "lickitung",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/108.svg",
    pokeType: "normal",
  },
  {
    name: "koffing",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/109.svg",
    pokeType: "poison",
  },
  {
    name: "weezing",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/110.svg",
    pokeType: "poison",
  },
  {
    name: "rhyhorn",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/111.svg",
    pokeType: "ground",
  },
  {
    name: "rhydon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/112.svg",
    pokeType: "ground",
  },
  {
    name: "chansey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/113.svg",
    pokeType: "normal",
  },
  {
    name: "tangela",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/114.svg",
    pokeType: "grass",
  },
  {
    name: "kangaskhan",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/115.svg",
    pokeType: "normal",
  },
  {
    name: "horsea",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/116.svg",
    pokeType: "water",
  },
  {
    name: "seadra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/117.svg",
    pokeType: "water",
  },
  {
    name: "goldeen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/118.svg",
    pokeType: "water",
  },
  {
    name: "seaking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/119.svg",
    pokeType: "water",
  },
  {
    name: "staryu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/120.svg",
    pokeType: "water",
  },
  {
    name: "starmie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/121.svg",
    pokeType: "water",
  },
  {
    name: "mr-mime",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/122.svg",
    pokeType: "psychic",
  },
  {
    name: "scyther",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/123.svg",
    pokeType: "bug",
  },
  {
    name: "jynx",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/124.svg",
    pokeType: "ice",
  },
  {
    name: "electabuzz",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/125.svg",
    pokeType: "electric",
  },
  {
    name: "magmar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/126.svg",
    pokeType: "fire",
  },
  {
    name: "pinsir",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/127.svg",
    pokeType: "bug",
  },
  {
    name: "tauros",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/128.svg",
    pokeType: "normal",
  },
  {
    name: "magikarp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/129.svg",
    pokeType: "water",
  },
  {
    name: "gyarados",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/130.svg",
    pokeType: "water",
  },
  {
    name: "lapras",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/131.svg",
    pokeType: "water",
  },
  {
    name: "ditto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
    pokeType: "normal",
  },
  {
    name: "eevee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/133.svg",
    pokeType: "normal",
  },
  {
    name: "vaporeon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/134.svg",
    pokeType: "water",
  },
  {
    name: "jolteon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/135.svg",
    pokeType: "electric",
  },
  {
    name: "flareon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/136.svg",
    pokeType: "fire",
  },
  {
    name: "porygon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/137.svg",
    pokeType: "normal",
  },
  {
    name: "omanyte",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/138.svg",
    pokeType: "rock",
  },
  {
    name: "omastar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/139.svg",
    pokeType: "rock",
  },
  {
    name: "kabuto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/140.svg",
    pokeType: "rock",
  },
  {
    name: "kabutops",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/141.svg",
    pokeType: "rock",
  },
  {
    name: "aerodactyl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/142.svg",
    pokeType: "rock",
  },
  {
    name: "snorlax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg",
    pokeType: "normal",
  },
  {
    name: "articuno",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/144.svg",
    pokeType: "ice",
  },
  {
    name: "zapdos",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/145.svg",
    pokeType: "electric",
  },
  {
    name: "moltres",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/146.svg",
    pokeType: "fire",
  },
  {
    name: "dratini",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/147.svg",
    pokeType: "dragon",
  },
  {
    name: "dragonair",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/148.svg",
    pokeType: "dragon",
  },
  {
    name: "dragonite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/149.svg",
    pokeType: "dragon",
  },
  {
    name: "mewtwo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg",
    pokeType: "psychic",
  },
  {
    name: "mew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg",
    pokeType: "psychic",
  },
  {
    name: "chikorita",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/152.svg",
    pokeType: "grass",
  },
  {
    name: "bayleef",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/153.svg",
    pokeType: "grass",
  },
  {
    name: "meganium",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/154.svg",
    pokeType: "grass",
  },
  {
    name: "cyndaquil",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/155.svg",
    pokeType: "fire",
  },
  {
    name: "quilava",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/156.svg",
    pokeType: "fire",
  },
  {
    name: "typhlosion",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/157.svg",
    pokeType: "fire",
  },
  {
    name: "totodile",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/158.svg",
    pokeType: "water",
  },
  {
    name: "croconaw",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/159.svg",
    pokeType: "water",
  },
  {
    name: "feraligatr",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/160.svg",
    pokeType: "water",
  },
  {
    name: "sentret",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/161.svg",
    pokeType: "normal",
  },
  {
    name: "furret",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/162.svg",
    pokeType: "normal",
  },
  {
    name: "hoothoot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/163.svg",
    pokeType: "normal",
  },
  {
    name: "noctowl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/164.svg",
    pokeType: "normal",
  },
  {
    name: "ledyba",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/165.svg",
    pokeType: "bug",
  },
  {
    name: "ledian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/166.svg",
    pokeType: "bug",
  },
  {
    name: "spinarak",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/167.svg",
    pokeType: "bug",
  },
  {
    name: "ariados",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/168.svg",
    pokeType: "bug",
  },
  {
    name: "crobat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/169.svg",
    pokeType: "poison",
  },
  {
    name: "chinchou",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/170.svg",
    pokeType: "water",
  },
  {
    name: "lanturn",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/171.svg",
    pokeType: "water",
  },
  {
    name: "pichu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/172.svg",
    pokeType: "electric",
  },
  {
    name: "cleffa",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/173.svg",
    pokeType: "fairy",
  },
  {
    name: "igglybuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/174.svg",
    pokeType: "normal",
  },
  {
    name: "togepi",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/175.svg",
    pokeType: "fairy",
  },
  {
    name: "togetic",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/176.svg",
    pokeType: "fairy",
  },
  {
    name: "natu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/177.svg",
    pokeType: "psychic",
  },
  {
    name: "xatu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/178.svg",
    pokeType: "psychic",
  },
  {
    name: "mareep",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/179.svg",
    pokeType: "electric",
  },
  {
    name: "flaaffy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/180.svg",
    pokeType: "electric",
  },
  {
    name: "ampharos",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/181.svg",
    pokeType: "electric",
  },
  {
    name: "bellossom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/182.svg",
    pokeType: "grass",
  },
  {
    name: "marill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/183.svg",
    pokeType: "water",
  },
  {
    name: "azumarill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/184.svg",
    pokeType: "water",
  },
  {
    name: "sudowoodo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/185.svg",
    pokeType: "rock",
  },
  {
    name: "politoed",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/186.svg",
    pokeType: "water",
  },
  {
    name: "hoppip",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/187.svg",
    pokeType: "grass",
  },
  {
    name: "skiploom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/188.svg",
    pokeType: "grass",
  },
  {
    name: "jumpluff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/189.svg",
    pokeType: "grass",
  },
  {
    name: "aipom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/190.svg",
    pokeType: "normal",
  },
  {
    name: "sunkern",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/191.svg",
    pokeType: "grass",
  },
  {
    name: "sunflora",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/192.svg",
    pokeType: "grass",
  },
  {
    name: "yanma",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/193.svg",
    pokeType: "bug",
  },
  {
    name: "wooper",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/194.svg",
    pokeType: "water",
  },
  {
    name: "quagsire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/195.svg",
    pokeType: "water",
  },
  {
    name: "espeon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/196.svg",
    pokeType: "psychic",
  },
  {
    name: "umbreon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/197.svg",
    pokeType: "dark",
  },
  {
    name: "murkrow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/198.svg",
    pokeType: "dark",
  },
  {
    name: "slowking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/199.svg",
    pokeType: "water",
  },
  {
    name: "misdreavus",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/200.svg",
    pokeType: "ghost",
  },
  {
    name: "unown",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/201.svg",
    pokeType: "psychic",
  },
  {
    name: "wobbuffet",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/202.svg",
    pokeType: "psychic",
  },
  {
    name: "girafarig",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/203.svg",
    pokeType: "normal",
  },
  {
    name: "pineco",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/204.svg",
    pokeType: "bug",
  },
  {
    name: "forretress",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/205.svg",
    pokeType: "bug",
  },
  {
    name: "dunsparce",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/206.svg",
    pokeType: "normal",
  },
  {
    name: "gligar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/207.svg",
    pokeType: "ground",
  },
  {
    name: "steelix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/208.svg",
    pokeType: "steel",
  },
  {
    name: "snubbull",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/209.svg",
    pokeType: "fairy",
  },
];
