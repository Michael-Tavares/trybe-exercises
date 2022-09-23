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
O operador booleano || retorna o resultado caso uma das condições sejam verdadeiras, 


*/