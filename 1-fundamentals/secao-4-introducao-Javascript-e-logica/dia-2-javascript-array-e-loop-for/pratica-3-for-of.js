//Utilize o for/of para imprimir os elementos da lista names com o console.log(): 

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(palavras of names){
  console.log(palavras);
}

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31