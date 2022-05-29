const mobileMenuItemsEL = document.querySelector(".mobile-menu-list");
const mobileMenuEL = document.querySelector(".backdrop-mobile");
const openMenuBtn = document.querySelector(".menu-btn-open");
const closeMenuBtn = document.querySelector(".mobile-btn-close");
const headerBuyBtn = document.querySelector(".header__buy-button");

mobileMenuItemsEL.addEventListener("click", makeTransitonOnPage);

function makeTransitonOnPage(event) {
    if (event.target.nodeName !== "A") {
        return;
    }
    mobileMenuEL.classList.toggle("is-hidden");
    openMenuBtn.classList.toggle("hidden-header");
    headerBuyBtn.classList.toggle("hidden-header");
}
