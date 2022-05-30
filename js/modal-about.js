(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-about-open]'),
    backdrop: document.querySelector('[data-about-backdrop]'),
    modal: document.querySelector('[data-about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.backdrop.classList.toggle('backdrop--hidden');
    refs.modal.classList.toggle('modal-is-open');
    refs.openModalBtn.classList.toggle('open');
  }
})();
