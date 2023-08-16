var factorial = 10;
var producto = 1;
var control = 1;

while (control <= factorial) {
  if (control === factorial) {
    producto = producto * control;
    console.log(producto);
    break;
  }
  producto = producto * control;
  control++;
  console.log(producto);
}
