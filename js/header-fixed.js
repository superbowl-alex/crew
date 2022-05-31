const headerEL = document.querySelector("header");
const headerNavHome = document.querySelector("a[data-color]");
const headerNavLinksEL = document.querySelectorAll(".header__nav-link");

window.addEventListener("scroll", makeHeaderFixed);

function makeHeaderFixed() {
    if (window.scrollY !== 0) {
        headerEL.classList.remove("header");
        headerEL.classList.add("js-header-scroll");
    } else {
        headerNavLinksEL.forEach(el => el.classList.remove("js-current-color"));
        headerNavHome.classList.add("js-current-color");
        
        headerEL.classList.add("header");
        headerEL.classList.remove("js-header-scroll");
    }
}