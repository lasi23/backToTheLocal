

// ------------Variable-------------
const lienMenu = document.querySelector("#dropdownLink");
const menu = document.querySelector("#dropdownContent");
const choix = menu.querySelectorAll("a");


// -----Gestion click menu---------
choix.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        lienMenu.textContent = item.textContent;
        menu.classList.remove("open");
    })
})

// ----Ouverture du menu en mode responsive-----
lienMenu.addEventListener("click", (event) => {
    if(window.innerWidth <= 768){
        event.preventDefault();
        menu.classList.toggle("open");
    }
});

// -----Hover en mode desktop-----
lienMenu.addEventListener("mouseenter", () => {
    if(window.innerWidth > 768){
        menu.style.visibility = "visible";
    }
});

lienMenu.addEventListener("mouseleave", () => {
    if(window.innerWidth > 768){
        setTimeout(() => {           
            if (!menu.matches(":hover")){
                menu.style.visibility = "hidden";
            }
        }, 200)
    }
});

menu.addEventListener("mouseenter", () => {
    if(window.innerWidth > 768){
        menu.style.visibility = "visible";
    }
});

menu.addEventListener("mouseleave", () => {
    if(window.innerWidth > 768){
        menu.style.visibility = "hidden";
    }
});

// -----Nettoyage au redimensionnement---------
window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        menu.classList.remove("open");
    }
});