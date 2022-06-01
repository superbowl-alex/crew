const mobileMenuItemsEL = document.querySelector(".mobile-menu__list");
const mobileMenuEL = document.querySelector(".backdrop-mobile");
const openMenuBtn = document.querySelector(".menu-btn-open");
const closeMenuBtn = document.querySelector(".mobile-btn-close");
const headerBuyBtn = document.querySelector(".header__buy-button");
const bodyEL = document.querySelector(".body");

mobileMenuItemsEL.addEventListener("click", makeTransitonOnPage);

function makeTransitonOnPage(event) {
    if (event.target.nodeName !== "A") {
        return;
    }
    bodyEL.classList.toggle("no-scroll");
    mobileMenuEL.classList.toggle("is-hidden");
    openMenuBtn.classList.toggle("hidden-header");
    headerBuyBtn.classList.toggle("hidden-header");
}
