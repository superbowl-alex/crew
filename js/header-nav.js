const headerNavEL = document.querySelector(".header__nav-list");
const headerNavLinksEL = document.querySelectorAll(".header__nav-link");

headerNavEL.addEventListener("click", doNavigationBySections);

function doNavigationBySections(event) {
    if (event.target.nodeName !== "A") {
        return;
    }
    
    headerNavLinksEL.forEach(el => el.classList.remove("js-current-color"));
    event.target.classList.add("js-current-color");
}