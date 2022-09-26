let numeroPrimo = 0;

for (let indexAtual = 2; indexAtual <= 50; indexAtual += 1) {
  let primo = true;
  for (let indexDivisor = 2; indexDivisor < indexAtual; indexDivisor += 1) {
    if (indexAtual % indexDivisor === 0) {
      primo = false;
    }
  }
  if (primo) {
    numeroPrimo = indexAtual;
  }
}

console.log(numeroPrimo);