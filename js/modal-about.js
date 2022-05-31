const buttonEL = document.querySelector('.about__btn');
const headerEL = document.querySelector('header');
const backdropEL = document.querySelector('.backdrop');
const modalEL = document.querySelector('div[data-about-modal]');
const bodylEL = document.querySelector('body');

buttonEL.addEventListener('click', openModal);

function openModal() {
  headerEL.classList.toggle('hidden-header');
  backdropEL.classList.toggle('backdrop--hidden');

  modalEL.classList.toggle('transform');
  modalEL.classList.toggle('about__modal');
  bodylEL.classList.toggle('modal-open');

  if (modalEL.classList.contains('transform')) {
    buttonEL.firstElementChild.textContent = 'Close';
  } else {
    buttonEL.firstElementChild.textContent = 'Read more';
  }
}
