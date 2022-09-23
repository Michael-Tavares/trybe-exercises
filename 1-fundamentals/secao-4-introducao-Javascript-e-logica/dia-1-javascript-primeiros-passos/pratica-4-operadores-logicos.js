/*
Operadores lógicos:
AND - &&
OR - ||
NOT - !

O operador booleano && apenas retornara um resultado caso AMBAS as condições sejam verdadeiras. Caso contrário, 
o resultado será falso.

                    console.log(true && true); // true
                    console.log(true && false); // false
                    console.log(false && true); // false
                    console.log(false && false); // false

Exercício:                 
*/

const currentHour = 9;
let message;

if(currentHour >= 22){
  message = 'Não deveríamos comer nada, é hora de dormir';
}else if(currentHour >= 18 && currentHour < 22){
  message = 'Rango da noite, vamos jantar :D';
}else if(currentHour >= 14 && currentHour < 18){
  message = 'Vamos fazer um bolo pro café da tarde?';
}else if(currentHour >= 11 && currentHour < 14){
  message = 'Hora do almoço!!!';
}else if(currentHour >= 4 && currentHour < 11){
  message = 'Hmmm, cheiro de café recém-passado';
}else {
  message = 'Horário inválido';
}

console.log(message);

/*
O operador booleano || precisa-se de apenas uma das condiçoes sejam verdadeiras, caso ambas sejam falsas o resultado é falso! 


                    console.log(true || true); // true
                    console.log(true || false); // true
                    console.log(false || true); // true
                    console.log(false || false); // false

Exercício:
*/

let weekDay = 'Domingo';

if(weekDay == 'segunda-feira' || weekDay == 'terca-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira'){
  console.log('Oba, mais sum dia de aprendizado na Trybe!');
}else{
  console.log('Finalmente, descanso merecido!');
}

/*
O operador booleano ! Este operador inverte o que a variável retornaria, por exemplo se declarar uma variável de 1 + 1 = 2 será true, no entanto se colocarmos o ! retorna false. As possibilidades são inúmeras, podendo ser usado em strings, numbers, boolean, valores nulos e tudo mais!
*/