let aluna = 'reprovada';

switch(aluna){
  case 'aprovada':
    console.log('Parabéns você foi aprovada!');
    break;
  case 'lista':
    console.log('Você está na lista de espera.');
    break;
  case 'reprovada':
    console.log('Você foi reprovada.');
    break;
  default:
    console.log('Valor não indentificado.');
}


mes = 'agosto';
let estacaoDoAno = '?';

switch (mes) {
  case 'janeiro':
  case 'fevereiro':
  case 'março':
    estacaoDoAno = 'Verão';
    break;
  case 'abril':
  case 'maio':
  case 'junho':
    estacaoDoAno = 'Outono';
    break;
  case 'julho':
  case 'agosto':
  case 'setembro':
    estacaoDoAno = 'Inverno';
    break;
  case 'outubro':
  case 'novembro':
  case 'dezembro':
    estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno);
