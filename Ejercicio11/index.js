class Estudiante {
  constructor(nombre) {
    (this.nombre = nombre), (this.asignaturas = ["Javascript", "HTML", "CSS"]);
  }
  obtenDatos() {
    return this;
  }
}

const nuevoEstudiante = new Estudiante("Barchu");

console.log(nuevoEstudiante.obtenDatos());
