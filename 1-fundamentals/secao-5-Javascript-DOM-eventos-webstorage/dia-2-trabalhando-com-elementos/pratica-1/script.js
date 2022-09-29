// Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById('primeiroFilho').nextElementSibling);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = document.getElementById('elementoOndeVoceEsta').parentNode;
pai.style.color = 'blue';
console.log(pai);

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

let filho = document.getElementById('primeiroFilhoDoFilho');
filho.innerText = 'Olá';

// Acesse o primeiroFilho a partir de pai.

console.log(document.getElementById('pai').firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta

let atencao = document.getElementById('elementoOndeVoceEsta').nextSibling;
console.log(atencao);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai.

console.log(document.getElementById('pai').lastElementChild.previousElementSibling);