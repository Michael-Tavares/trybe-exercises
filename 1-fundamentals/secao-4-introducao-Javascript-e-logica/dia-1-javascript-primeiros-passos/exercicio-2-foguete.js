/*
Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if.
*/
const num1 = 13;
const num2 = 11;
const num3 = 3;

if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
  console.log(true);
}else{
  console.log(false);
}

/*
Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
Bonus: use somente um if.
*/
const num4 = 4;
const num5 = 10;
const num6 = 6;

if(num4 % 2 != 0 || num5 % 2 != 0 || num6 % 2 != 0){
  console.log(true);
}else{
  console.log(false);
}


/*
Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);

*/

const custoProduto = 50;
const valorVenda = 200;
let lucro1000;

if(custoProduto == 50 && valorVenda == 200){
  let impost = custoProduto * 0.2;
  let valorCustoTotal = custoProduto + impost;
  let lucro = valorVenda - valorCustoTotal;
  lucro1000 = lucro * 1000;
  console.log('O lucro total de 1000 unidades é: ' +lucro1000);
}else if(custoProduto < 0 || valorVenda < 0){
  console.log('Digite um valor maior que 0');
}else{
  console.log('Digite um valor.');
}
