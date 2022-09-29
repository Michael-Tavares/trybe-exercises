// Crie um irmão para elementoOndeVoceEsta.
let pai = document.getElementById('pai');

let adicionaIrmao = document.createElement('section');
adicionaIrmao.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(adicionaIrmao);
console.log(adicionaIrmao);

// Crie um filho para elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'terceiroElementoOndeVoceEsta';

elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
console.log(filhoElementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho.

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

let filhodoPrimeiroFilhoDoFilho = document.createElement('section');
filhodoPrimeiroFilhoDoFilho.id = 'primeiroFilhodoFilhoDoFilho';

primeiroFilhoDoFilho.appendChild(filhodoPrimeiroFilhoDoFilho);
console.log(filhodoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.

console.log(document.getElementById('primeiroFilhodoFilhoDoFilho').parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling);