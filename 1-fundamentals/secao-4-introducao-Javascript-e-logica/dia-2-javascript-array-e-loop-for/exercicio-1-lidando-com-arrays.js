let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 10];

/*Percorra o array imprimindo todos os valores nele contidos com a função console.log(); 

for(let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
}
*/




/*Some todos os valores contidos no array e imprima o resultado;
soma = 0;

for(let index = 0; index < numbers.length; index += 1){
  soma += numbers[index];
}

console.log(soma);
*/




/*
Calcule e imprima a média aritmética dos valores contidos no array;
  A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.


soma = 0;
media = 0;

for (let index = 0; index < numbers.length; index += 1){
  soma += numbers[index];
  media = soma / index;
}

console.log(media);
*/





/*
Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;


soma = 0;
media = 0;

for (let index = 0; index < numbers.length; index += 1){
  soma += numbers[index];
  media = soma / index;
}
if(media >= 20){
  console.log('Valor maior que 20');
}else{
  console.log('Valor menor que 20');
}
*/



/*Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior = 0;

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] > maior){
    maior = numbers[index];
  }
}

console.log(maior);
*/



/*Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

*/

num = 0;

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] % 2 !== 0){
    num += 1;
  }
}  

if(num !== 0){
  console.log(num);
}else{
  console.log('Nenhum valor encontrado');
}