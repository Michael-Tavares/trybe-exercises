/*Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara
verificaPalindrome('arara')
Retorno esperado: true
verificaPalindrome('desenvolvimento')
Retorno esperado: false
*/

function palindrome(verifica){
  let contrario = verifica.split('').reverse().join('');
  if(contrario === verifica){
    return true;
  }else{
    return false;
  }
}

console.log(palindrome('uva'));
console.log(palindrome('ana'));
console.log(palindrome('amarelo'));


/*Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1];.

Valor esperado no retorno da função: 4.
*/

function maiorValor(numeros){
  let maior = 0;
  for(let index in numeros){
    if(numeros[maior] < numeros[index]){
      maior = index;
    }
  }
  return maior;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));