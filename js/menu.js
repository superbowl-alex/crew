(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-btn-open"),
    closeMenuBtn: document.querySelector(".mobile-btn-close"),
    headerBuyBtn: document.querySelector(".header__buy-button"),
    backdrop: document.querySelector(".backdrop-mobile"),
    body: document.querySelector(".body"),
  };
  
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.backdrop.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    refs.openMenuBtn.classList.toggle("hidden-header");
    refs.headerBuyBtn.classList.toggle("hidden-header");
  }
})();
