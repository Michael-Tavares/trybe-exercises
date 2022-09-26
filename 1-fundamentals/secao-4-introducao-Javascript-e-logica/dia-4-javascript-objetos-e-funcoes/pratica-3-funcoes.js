/*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

function somar(a, b){
  return console.log(a + b);
}
somar(30, 40);


function subtrair(a, b){
  return console.log(a - b);
}
subtrair(100, 24);


function multiplicar(a, b){
  return console.log(a * b);
}
multiplicar(40, 8);


function dividir(a, b){
  return console.log(a / b);
}
dividir(700, 5);


function resto(a, b){
  return console.log(a % b);
}
resto(100, 10);


//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function comparacao(a, b){
  if(a > b){
    return console.log(a + ' é maior que ' + b)
  }else if(a < b){
    return console.log(a + ' é menor que ' + b)
  }else{
    return console.log(a + ' é igual a ' + b)
  }
}

comparacao(40, 50);


function comparacaoTresNumeros(a, b, c){
  if(a > b && a > c){
    return console.log(a + ' é maior que ' + b + ' e maior que ' + c)
  }else if(b > a && b > c){
    return console.log(b + ' é maior que ' + a + ' e maior que ' + c)
  }else if(c > a && c > b){
    return console.log(c + ' é maior que ' + a + ' e maior que ' + b)
  }else{
    return console.log('Todos os números são identicos.')
  }
}

comparacaoTresNumeros(3, 2, 5);