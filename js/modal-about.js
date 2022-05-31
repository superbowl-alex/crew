// (() => {
//   const refs = {
//     headerEl: document.querySelector("header"),
//     openModalBtn: document.querySelector('[data-modal-about-open]'),
//     backdrop: document.querySelector('[data-about-backdrop]'),
//     modal: document.querySelector('[data-about-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.headerEl.classList.toggle("hidden-header");
//     document.body.classList.toggle('modal-open');
//     refs.backdrop.classList.toggle('backdrop--hidden');
//     refs.modal.classList.toggle('modal-is-open');
//     refs.openModalBtn.classList.toggle('open');
//   }
// })();
const buttonEL = document.querySelector(".about__btn");
const headerEL = document.querySelector("header");
const backdropEL = document.querySelector(".backdrop");
const modalEL = document.querySelector("div[data-about-modal]")

buttonEL.addEventListener("click", openModal)

function openModal() {
  headerEL.classList.toggle("hidden-header");
  backdropEL.classList.toggle("backdrop--hidden");

  modalEL.classList.toggle("transform");
  modalEL.classList.toggle("about__modal");

  if (modalEL.classList.contains("transform")) {
    buttonEL.firstElementChild.textContent = "Close";
  } else {
    buttonEL.firstElementChild.textContent = "Read more";
  }
}