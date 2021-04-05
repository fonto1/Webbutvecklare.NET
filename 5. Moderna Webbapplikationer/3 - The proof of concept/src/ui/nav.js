import { BaseElement } from "./base-element.js";

/*
export class Nav extends BaseElement {
    constructor(title) {
        super()
        this.title = title;
    }


    getElementString() {
        return `
        
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" id="affar" href="#">Affärsplan</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" id="projekt" href="#">ProjektIdé</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" id="sponsor" href="#">SPONSRA</a>
            </li>
        </ul>
        `;
    }
}
*/
export let links = [];

export function addLi(name, link) {
  let newLi = document.createElement("li");
  newLi.className = "hoverLinks";
  let newA = document.createElement("a");
  newA.className = "nav-link active";
  newA.setAttribute("href", link);
  newA.innerHTML = name;
  newLi.appendChild(newA);
  links.push(newLi);
}
