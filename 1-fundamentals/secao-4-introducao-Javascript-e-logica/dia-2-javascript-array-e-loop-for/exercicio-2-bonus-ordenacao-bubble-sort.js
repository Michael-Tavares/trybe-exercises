//Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 
for(let index = 1; index < numbers.length; index += 1){
  for(let indexTwo = 0; indexTwo < index; indexTwo += 1){
    if(numbers[index] < numbers[indexTwo]){
      let crescent = numbers[index];
      numbers[index] = numbers[indexTwo];
      numbers[indexTwo] = crescent;
    }
  }
}

console.log(numbers);

//Ordene o array numbers em ordem decrescente e imprima seus valores;

for(let index = 1; index < numbers.length; index += 1){
  for(let indexTwo = 0; indexTwo < index; indexTwo += 1){
    if(numbers[index] > numbers[indexTwo]){
      let decrescent = numbers[index];
      numbers[index] = numbers[indexTwo];
      numbers[indexTwo] = decrescent;
    }
  }
}

console.log(numbers);