const pessoaCandidata = 60;

if(pessoaCandidata >= 80){
  console.log('Parabéns, você foi aprovado(a)!');
}else if(pessoaCandidata < 80 && pessoaCandidata >= 60){
  console.log('Você está na nossa lista de espera');
}else{
  console.log('Você foi reprovado(a)');
}