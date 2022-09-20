const menuLinks = document.querySelectorAll(
  '.header__nav-link[data-goto], .mobile-menu__link[data-goto], .hero__link[data-goto]',
);
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const goToBlock = document.querySelector(menuLink.dataset.goto);
      const goToBlockValue =
        goToBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: goToBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}
