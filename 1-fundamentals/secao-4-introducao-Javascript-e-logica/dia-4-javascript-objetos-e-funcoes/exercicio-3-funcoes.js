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