const submitbutton = document.getElementById('submitbutton');

submitbutton.addEventListener('click', (event) => {
  event.defaultPrevented();
})

const userName = document.getElementById('user-name');
const email = document.getElementById('e-mail');

if (userName.attributes.min.value < 10 || userName.attributes.max.value > 40) {
  alert('teste');
}
