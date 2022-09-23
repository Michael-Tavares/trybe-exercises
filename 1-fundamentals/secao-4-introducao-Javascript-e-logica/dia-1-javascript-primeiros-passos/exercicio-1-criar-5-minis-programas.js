/*
Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
  Adição (a + b)
  Subtração (a - b)
  Multiplicação (a * b)
  Divisão (a / b)
  Módulo (a % b)
*/
const a = 30;
const b = 10;

let adicao = a + b;
let sub = a - b;
let multi = a * b;
let divi = a / b;
let resto = a % b;

console.log(
  'Adicão = ' + adicao,
  'Subtração = ' + sub,
  'Multiplicação = ' + multi,
  'Divisão = ' + divi,
  'Resto = ' + resto,
)
/*
Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
*/

const maior = 30;
const menor = 10;

if(maior > menor){
  console.log(maior + ' é maior que  ' + menor);
}else if(menor > maior){
  console.log(menor + ' é maior que ' + maior);
}else{
  console.log('São valores identicos.');
}

/* 
Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
*/

const um = 50;
const dois = 30;
const tres = 60;

if(um > dois && um > tres){
  console.log('O ' + um + ' é o maior número');
}else if(dois > um && dois > tres){
  console.log('O ' + dois + ' é o maior número');
}else{
  console.log('O ' + tres + ' é o maior número');
}

/*
Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
*/
let valor = 'zero';
let positivo = 'positivo';
let negativo = 'negativo';

if(valor == positivo){
  console.log('Positivo');
}else if(valor == negativo){
  console.log('Negativo');
}else{
  console.log('zero');
}

/*
Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
*/

const primeiro = 50;
const segundo = 60;
const terceiro = 60;

if(primeiro == 60 && segundo == 60 && terceiro == 60){
  console.log('o triangulo é verdadeiro');
}else{
  console.log('Triangulo falso');
}


/*Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let peca = 'RAINHA';
let movimento;

switch(peca.toLowerCase(String)){
  case 'pẽao':
    movimento = 'O pẽao pula uma casa para frente e come em diagonal';
    break;
  case 'bispo':
    movimento = 'O bispo anda apenas em diagonal';
    break;
  case 'cavalo':
    movimento = 'O cavalo anda em L';
    break;
  case 'torre':
    movimento = 'A torre anda apenas horizontal';
    break;
  case 'rainha':
    movimento = 'A rainha anda em todas as direções possíveis sem limite';
    break;
  case 'rei':
    movimento = 'o rei anda em todas as direões próximas sem que fique em xeque';
    break;
  default:
    movimento = 'peça invalida';
}
console.log(movimento);