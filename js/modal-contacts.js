const buttonOpenEL = document.querySelector('.contacts-btn-2');
const buttonCloseEL = document.querySelector('.contacts-modal__btn-close');
const headerEL = document.querySelector('header');
const backdropEL = document.querySelector('.contacts-backdrop');
const modalEL = document.querySelector('div[data-contacts-modal]');
const bodylEL = document.querySelector('body');

// buttonEL.addEventListener('click', openModal);
buttonOpenEL.addEventListener('click', openModal);
buttonCloseEL.addEventListener('click', closeModal);

function openModal() {
  headerEL.classList.toggle('hidden-header');
  backdropEL.classList.toggle('backdrop--hidden');

  modalEL.classList.toggle('transform');
  modalEL.classList.toggle('contacts-modal');
  bodylEL.classList.toggle('modal-open');
}
function closeModal() {}

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle('modal-open');
//     refs.modal.classList.toggle('backdrop--hidden');
//   }
// })();
