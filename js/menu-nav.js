const headerNavEL = document.querySelector(".mobile-menu__list");
const headerNavLinksEL = document.querySelectorAll(".mobile-menu__link");

headerNavEL.addEventListener("click", doNavigationBySections);

function doNavigationBySections(event) {
    if (event.target.nodeName !== "A") {
        return;
    }
    
    headerNavLinksEL.forEach(el => el.classList.remove("mobile-menu__link-color"));
    event.target.classList.add("mobile-menu__link-color");
}