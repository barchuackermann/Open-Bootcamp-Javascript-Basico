let fechaHoy = new Date();
let nacimiento = new Date(1986, 4, 9);
let masTarde = fechaHoy.getDate() > nacimiento.getDate();
let diaNacimiento = nacimiento.getDate();
let mesNacimiento = nacimiento.getMonth() + 1;
let anyoNacimiento = nacimiento.getFullYear();
