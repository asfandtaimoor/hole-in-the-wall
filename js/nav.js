document.querySelector('.burgger').addEventListener('click', show);
function show() {
  document.querySelector('header').classList.toggle('menu');
  document.querySelector('burgger').classList.toggle('close');
}
