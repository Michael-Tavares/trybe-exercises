//Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
const bodyTag = document.getElementById('body');

let tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício - JavaScript DOM';
bodyTag.appendChild(tagH1)

