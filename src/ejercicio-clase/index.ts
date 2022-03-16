import {Racionales} from './Racionales';

const numero1 = new Racionales(15, 3);
const numero2 = new Racionales(2, 5);

console.log('Racional simplificado: ' + numero1.simplificar(numero1));
console.log('Racional simplificado: ' + numero2.simplificar(numero2));
console.log('Racionales sumados: ' + (numero1.add(numero1, numero2)));
console.log('Racionales restados: ' + (numero1.sub(numero1, numero2)));
console.log('Racionales multiplicados: ' +
(numero1.multiply(numero1, numero2)));
console.log('Racionales divididos: ' +
(numero1.div(numero1, numero2)));