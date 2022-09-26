/*
Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

*/

let player = [
  {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
    medals: {
      golden: 2,
      silver: 3,
    },
  },
];

console.log(player[0]);
console.log('O nome dela é ' + player[0].name + player[0].lastName + ' tem ' + player[0].age + ' anos e possuí ' + player[0].medals.golden + ' medalhas de ouro');
