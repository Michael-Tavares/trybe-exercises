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

//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let listNoOrdened = document.createElement('ul');
thirdTagSection.appendChild(listNoOrdened)

let number = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (let index in number) {
  let tagLi = document.createElement('li');
  tagLi.innerText = number[index];
  listNoOrdened.appendChild(tagLi);
}

//Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 1; index <= 3; index += 1) {
  let tagH3 = document.createElement('h3');
  tagH3.innerHTML = 'Olá'+ ' ' + index;
  tagH3.className = 'description';
  tagMain.appendChild(tagH3);
}


//Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

//Adicione a classe title na tag h1 criada;
tagH1.className = 'title';

//Adicione a classe description nas 3 tags h3 criadas;
//tagH3.className = 'description';

//Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
tagMain.removeChild(secondTagSection);


//Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
thirdTagSection.style.marginRight = 'auto';


//Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
tagMain.style.backgroundColor = 'green';


//Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
listNoOrdened.lastChild.remove();
listNoOrdened.lastChild.remove();