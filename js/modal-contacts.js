(() => {
  const refs = {
    openModalBtn: document.querySelector('.contacts-btn-2'),
    closeModalBtn: document.querySelector('.contacts-modal__btn-close'),
    backdrop: document.querySelector('.contacts-backdrop'),
    modal: document.querySelector('.contacts-modal'),
    header: document.querySelector('header'),
    body: document.querySelector('.body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle('contacts-backdrop--hidden');
    refs.modal.classList.toggle('contacts-modal-open');
    refs.header.classList.toggle('hidden-header');
    refs.body.classList.toggle('modal-open');
  }
})();
