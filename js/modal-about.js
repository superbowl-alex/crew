(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-about-open]'),
    closeModalBtn: document.querySelector('[data-modal-about-close]'),
    header: document.querySelector('header'),
    backdrop: document.querySelector('[data-backdrop-about]'),
    modal: document.querySelector('[data-modal-about]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('about-modal-open');
    refs.backdrop.classList.toggle('about-backdrop--hidden');
    refs.header.classList.toggle('hidden-header');
  }
})();
