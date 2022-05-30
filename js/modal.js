(() => {
  const refs = {
    openModalBtn: document.querySelector('.header__buy-button'),
    secondopenModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('.btn_close-modal'),
    modal: document.querySelector('.modal-backdrop'),
    body: document.querySelector('.body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.secondopenModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
