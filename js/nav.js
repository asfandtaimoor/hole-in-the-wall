document.querySelector('.burgger').addEventListener('click', show);
function show() {
  document.querySelector('header').classList.toggle('menu');
  document.querySelector('burgger').classList.toggle('close');
}
// document.onclick = function (clickEvent) {
//   if (
//     clickEvent.target.class !== 'burgger' &&
//     clickEvent.target.class !== 'a'
//   ) {
//     document.querySelector('header').classList.remove('menu');
//     document.querySelector('burgger').classList.remove('close');
//   }
// };
