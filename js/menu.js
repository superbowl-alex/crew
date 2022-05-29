(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-btn-open"),
    closeMenuBtn: document.querySelector(".mobile-btn-close"),
    headerBuyBtn: document.querySelector(".header__buy-button"),
    menu: document.querySelector(".mobile-menu"),
    body: document.querySelector(".body"),
  };
  
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    refs.openMenuBtn.classList.toggle("hidden-header");
    refs.headerBuyBtn.classList.toggle("hidden-header");
  }
})();