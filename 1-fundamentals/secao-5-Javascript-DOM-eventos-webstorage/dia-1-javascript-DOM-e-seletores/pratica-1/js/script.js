const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.getElementById("page-title").innerText = 'Os bons companheiros';

let secondParagraph = document.getElementById('second-paragraph');
secondParagraph.style.fontSize = '40px';
secondParagraph.innerText = 'Uma boa síntese';

let subtitle = document.getElementById('subtitle');
subtitle.style.backgroundColor = 'blue';

let classP = document.getElementsByClassName('content-p');
classP[0].innerHTML = 'Um bom filme';

let sub = document.getElementsByTagName('h4');
sub[0].style.color = 'white';