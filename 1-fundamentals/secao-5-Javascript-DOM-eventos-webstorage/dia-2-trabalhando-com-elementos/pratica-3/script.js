// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

let elementPai = document.getElementById('pai');
let filhos = pai.childNodes;

for (let index = filhos.length - 1; index >= 0; index -= 1) {
  let filhoAtual = filhos[index];
  if (filhoAtual.id !== 'elementoOndeVoceEsta') {
    filhoAtual.remove();
  }
}
let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove(); 
