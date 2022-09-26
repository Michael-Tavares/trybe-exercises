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

/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3];.

Valor esperado no retorno da função: 6.
*/

function menorValor(numeros){
  let menor = 0;
  for(let index in numeros){
    if(numeros[menor] > numeros [index]){
      menor = index;
    }
  }
  return menor;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));


/*
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

Valor esperado no retorno da função: Fernanda.
*/

function maiorCaracteres(nomes){
  let caracteres = nomes[0];
  for(let index in nomes){
    if(caracteres.length < nomes[index].length){
      caracteres = nomes[index];
    }
  }
  return caracteres;
}

console.log(maiorCaracteres(['José', 'Lucas', 'Nádia', 'Cairo', 'Joana', 'Michael']));

/*
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3];.

Valor esperado no retorno da função: 2.
*/ 




/*Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

Valor de teste: N = 5.

Valor esperado no retorno da função: 1+2+3+4+5 = 15.
*/



/*Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

Valor de teste: 'trybe' e 'be'

Valor esperado no retorno da função: true

verificaFimPalavra('trybe', 'be');

Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan');

Retorno esperado: false
*/