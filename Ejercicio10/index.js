import * as controller from "./controller.js";
import chalk from "chalk";

const suma1 = controller.suma(1, 2);
const suma2 = controller.suma(4, 5);

const resultado = controller.multiplica(suma1, suma2);

console.log(chalk.green(resultado));
