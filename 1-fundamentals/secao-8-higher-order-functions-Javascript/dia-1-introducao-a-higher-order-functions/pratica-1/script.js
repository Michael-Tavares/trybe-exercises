/*Crie uma função que retorne a string 'Acordando!!';

Crie outra função que retorne a string 'Bora tomar café!!';

Crie mais uma função que retorne a string 'Partiu dormir!!';

Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no 
console o resultado da execução das funções que você criou nos exemplos anteriores.*/

const acorda = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(acorda));
console.log(doingThings(cafe));
console.log(doingThings(dormir));