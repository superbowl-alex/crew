 (() => {
            const menuBtnRef = document.querySelector("[data-menu-button]");
            const modalwin = document.querySelector("[data-menu]");
            const herotxthid = document.querySelector("[data-menu-hidden]");
            const txtovrfl = document.querySelector("[overflow-on]");

            menuBtnRef.addEventListener("click", () => {
                const expanded =
                    menuBtnRef.getAttribute("aria-expanded") === "true" || false;
                menuBtnRef.classList.toggle("is-active");
                menuBtnRef.setAttribute("aria-expanded", !expanded);
                modalwin.classList.toggle("is-open");
                herotxthid.classList.toggle("is-hidden");
                txtovrfl.classList.toggle("overflow-on");
            });
        })();