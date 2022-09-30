const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
function liClick() {
  secondLi.className = 'tech';
  thirdLi.className = 'tech';
}
secondLi.addEventListener('click', liClick);

//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function alteraTexto() {
  const texto = document.querySelector('.tech');
  texto.innerText = input.value;
}

input.addEventListener('keyup', alteraTexto);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://michael-tavares.github.io/')
})
// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function alteraCor() {
  myWebpage.style.color = 'red';
}
myWebpage.addEventListener('mouseover', alteraCor);

function removeColor() {
  myWebpage.style.color = 'white';
}
myWebpage.addEventListener('mouseleave', removeColor);
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.