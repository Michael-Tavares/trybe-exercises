// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', (event) => {
  event.preventDefault();
});

INPUT_CHECKBOX.addEventListener('click', (event) => {
  event.preventDefault();
});

function prevent(event) {
  const charCode = event.charCode;
  if (charCode !== 0) {
    if (charCode < 97 || charCode > 122) {
      event.preventDefault();
    }
  }
}

INPUT_TEXT.addEventListener("keypress", prevent, false);