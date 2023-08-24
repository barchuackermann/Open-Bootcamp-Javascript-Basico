function ejemplo2() {
  return true;
}

const Promesa1 = setTimeout(() => {
  console.log("Hola soy una promesa");
}, "5000");

function* indices() {
  let i = 0;
  while (true) {
    i = i + 2;
    if (i === 0) {
      return i;
    }
    yield i;
  }
}
let nuevo = indices();
