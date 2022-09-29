//Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
const bodyTag = document.getElementById('body');

let tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício - JavaScript DOM';
bodyTag.appendChild(tagH1)

//Adicione a tag main com a classe main-content como filho da tag body;

const tagMain = document.createElement('main');
tagMain.className = 'main-content';
bodyTag.appendChild(tagMain);

//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let tagP = document.createElement('p');
tagP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam, quo sapiente aliquid consequatur repellat! Officia cum autem in eum vel cupiditate, debitis rerum harum similique reiciendis commodi itaque deleniti!';
tagSection.appendChild(tagP);

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let secondTagSection = document.createElement('section');
secondTagSection.className = 'left-content';
tagMain.appendChild(secondTagSection);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let thirdTagSection = document.createElement('section');
thirdTagSection.className = 'right-content';
tagMain.appendChild(thirdTagSection);

//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let image = document.createElement('img');
image.src = 'https://picsum.photos/200'
image.className = 'small-image';
secondTagSection.appendChild(image);