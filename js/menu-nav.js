const headerNavEL = document.querySelector(".mobile-menu-list");
const headerNavLinksEL = document.querySelectorAll(".mobile-menu-link");

headerNavEL.addEventListener("click", doNavigationBySections);

function doNavigationBySections(event) {
    if (event.target.nodeName !== "A") {
        return;
    }
    
    headerNavLinksEL.forEach(el => el.classList.remove("mobile-menu-link-color"));
    event.target.classList.add("mobile-menu-link-color");
}