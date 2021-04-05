import {
    addLi,links
} from "./src/ui/nav.js"
import {
    affarsplan,
    projektide,
    sponsorer
} from "./src/ui/content.js"

let navbar = document.getElementById("nav") // get navBar element
let content = document.getElementById("content") // get content element


addLi("app.html", "app.html"); // add Li to navbar
addLi("Affärsplan", "#"); 
addLi("ProjektIdé", "#");
addLi("Sponsorer", "#");


links.forEach(function (liItem) { //  populate navbar
    navbar.appendChild(liItem)
    liItem.addEventListener('click', addContent)
})


function addContent(data) {         // add content to page 
    switch (data.toElement.text) {

        case "Affärsplan":
            content.innerHTML = affarsplan;
            break;

        case "ProjektIdé":
            content.innerHTML = projektide;
            break;

        case "Sponsorer":
            content.innerHTML = sponsorer;
            break;
        
        default: 
            console.log("nothing special")
            break;
    }
}