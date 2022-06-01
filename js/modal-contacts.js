(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-contacts-open]'),
    closeModalBtn: document.querySelector('[data-modal-contacts-close]'),
    header: document.querySelector('header'),
    backdrop: document.querySelector('[data-backdrop-contacts]'),
    modal: document.querySelector('[data-modal-contacts]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('contacts-modal-open');
    refs.backdrop.classList.toggle('contacts-backdrop--hidden');
    refs.header.classList.toggle('hidden-header');
  }
})();
