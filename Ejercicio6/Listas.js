const listaCompra = [
  "mango",
  "queso",
  "bananas",
  "dulce de leche",
  "mayonesa",
  "dentífrico",
];

listaCompra.push("Aceite de Girasol");
listaCompra.pop();

const peliculasFav = [
  {
    titulo: "Fight Club",
    director: "David Fincher",
    fechaEstreno: new Date(1999, 10, 5),
  },
  {
    titulo: "Esperando la carroza",
    director: "Alejandro Doria",
    fechaEstreno: new Date(1985, 4, 6),
  },
  {
    titulo: "Midnight in Paris",
    director: "Woody Allen",
    fechaEstreno: new Date(2011, 4, 13),
  },
];

const peliculas2010 = peliculasFav.filter(
  (valor) => valor.fechaEstreno > new Date(2010, 0, 1)
);

const directores = peliculasFav.map((peliculasFav) => peliculasFav.director);
const peliculas = peliculasFav.map((peliculasFav) => peliculasFav.titulo);
const peliYDirConcat = directores.concat(peliculas);
const peliYDirFPropag = [...directores, ...peliculas];
