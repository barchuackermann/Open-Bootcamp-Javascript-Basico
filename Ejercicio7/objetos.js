const barchu = {
  nombre: "Barchu",
  apellido: "Ackermann",
  edad: 37,
  altura: 168,
  desarrolladora: true,
};

let edad = barchu.edad;
const manada = [
  {
    ...barchu,
  },
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 92,
    altura: 280,
    desarrolladora: false,
  },
  {
    nombre: "Juana",
    apellido: "Rodriguez",
    edad: 1,
    altura: 20,
    desarrolladora: false,
  },
];

manada.sort((a, b) => b.edad - a.edad);
