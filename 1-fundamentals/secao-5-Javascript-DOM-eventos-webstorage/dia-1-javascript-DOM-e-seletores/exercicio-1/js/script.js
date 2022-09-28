/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function alteraTexto() {
  let textP = document.querySelectorAll('p')[1];
  return textP.innerText = 'Apenas vivo';
}

alteraTexto();

function alteraCor(element, color) {
  document.querySelector(element).style.backgroundColor = color;
}

alteraCor('.main-content', 'rgb(76,164,109)');

function alteraCorCenter(element, color) {
  document.querySelector(element).style.backgroundColor = color;
}

alteraCorCenter('.center-content', 'rgb(255,255,255)');

function alteraTextoH1(text) {
  document.getElementsByClassName('title')[0].innerText = text;
}

alteraTextoH1('Exercício - JavaScript')

function alteraTextoP(element, text) {
  document.querySelector(element).innerText = text;
}

alteraTextoP('p', 'TEXTO PADRÃO DO NOSSO SITE');

function exibeP(p, index) {
  let exibe = document.querySelectorAll(p)[index].innerText;
  return exibe;
}

console.log(exibeP('p', '0'));
console.log(exibeP('p', '1'));
console.log(exibeP('p', '2'));