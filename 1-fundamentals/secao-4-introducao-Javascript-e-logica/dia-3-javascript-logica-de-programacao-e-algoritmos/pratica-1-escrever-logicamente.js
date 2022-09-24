/*
Como se vestir para uma festa?

1- definir o estilo de festa
2- definir como você quer estar vestido
3- abrir o roupeiro
4- pegar peças de roupa previamente definidas para seu estilo de festa
5- fechar o roupeiro
6- retirar a sua roupa 
7- vestir a roupa para a festa
*/

/*
Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. 
Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:
*/
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}

const n = 9 ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);
