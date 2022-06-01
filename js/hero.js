 (() => {
            const HeroBtnOpen = document.querySelector("[hero-btn-open]");
            const HeroModalWin = document.querySelector("[hero-modal]");
            const HeroBtnclose = document.querySelector("[hero-btn-close]");
            const body = document.querySelector(".body")
     
            
           
            HeroBtnOpen.addEventListener("click", () => {
                const expanded =
                    HeroBtnOpen.getAttribute("aria-expanded") === "true" || false;
                    HeroBtnOpen.setAttribute("aria-expanded", !expanded);
                
                HeroModalWin.classList.toggle("is-hidden");  
                body.classList.toggle("no-scroll");
            });
                HeroBtnclose.addEventListener("click", () => {
                const expanded =
                    HeroBtnOpen.getAttribute("aria-expanded") === "true" || false;
                    HeroBtnOpen.setAttribute("aria-expanded", !expanded);
                
                    HeroModalWin.classList.toggle("is-hidden");
                    body.classList.toggle("no-scroll");
            });
        })();