

const lienMenu = document.querySelector("#dropdownLink");
const menu = document.querySelector("#dropdownContent");
const choix = menu.querySelectorAll("a")



function hoverMenu (){

// ------------rend le menu visible------
    lienMenu.addEventListener("mouseenter", () => {

        menu.style.visibility = "visible";
        
    })
    
    // -------------------rend le menu invisible------
    lienMenu.addEventListener("mouseleave", () => {
        // --------avec un temp avant de disparaitre pour pouvoir passer sur les éléments
        setTimeout(() => {           
            if (!menu.matches(":hover")){
            menu.style.visibility = "hidden";
            console.log("mousse sort de l'élément")
            }
        }, 200)
    })

// --------garde le menu déroulé------------
    menu.addEventListener("mouseenter", () => {
    
        menu.style.visibility = "visible";
        
    })
    
    // -----------rend le menu invisible--------
    menu.addEventListener("mouseleave", () => {
        
        menu.style.visibility = "hidden";
    })
}



hoverMenu();

// -------------sélectionne le choix et l'affiche ---------
choix.forEach(item => {
    item.addEventListener("click", () => {
        lienMenu.textContent = item.textContent;
    })
})
