let navCountry = document.getElementById("navCountry");
let listCity = document.getElementById("listCity");
listCity.style.display = 'none';
let cityInfo = document.getElementById("cityInfo");
let chkBox = document.getElementById("chkBox");
let form = document.getElementById("form");
let summary = document.getElementById("summary");
let clear = document.getElementById("clear");

let citySaved = [];
let storageIndex = "index";
clear.addEventListener('click', clearData);

checkLocalStorage();
start();

async function start() {
    let text;
    let tempCity;
    let toggle;
    navCountry.addEventListener('click', elementClick);
    listCity.addEventListener('click', elementClick);
    chkBox.addEventListener('click', selectChkBox);

    const country = await fetch("land.json").then(function(res){return res.json()});
    const city = await fetch("stad.json").then(function(res){return res.json()});;
    
    allCountries = country.map(function (country) { // array med alla länder
        return country.countryname
    })

    allCities = city.map(function (city) { // array med alla städer
        return city.stadname
    })

    addCountryToPage()

    function addCountryToPage() {
        country.forEach(function (country) {
            text = `<li class="${country.id}">${country.countryname}</li>`;
            navCountry.insertAdjacentHTML('afterbegin', text) // lägg ut länder på navCountry
            displayPlaces()
        })
    }

    function addCityToPage(element) {
        let filter;
        form.style.display = "none";
        listCity.innerHTML = "";
        filter = city.filter(function (city) {
            return city.countryid == element.className; // filtrera stad efter element mha countryId
        })

        filter.forEach(function (filter) {
            text = `<li>${filter.stadname}</li>`
            listCity.insertAdjacentHTML('afterbegin', text) // lägg ut städer på listCity
        })

        // quick fix toggler
        if (element.innerHTML == toggle && listCity.style.display == 'block') {
            listCity.style.display = 'none'

        } else if (element.innerHTML !== toggle) {
            listCity.style.display = 'block'
            toggle = element.innerHTML;

        } else if (element.innerHTML == toggle && listCity.style.display == 'none') {
            listCity.style.display = 'block'
        }

    }

    function addCityDesc(element) {
        let check;
        tempCity = city.find(function (city) { // plocka ut staden användaren har klickat från city databasen och spara i tempCity 
            return city.stadname === element.innerHTML
        })

        if (citySaved.length > 0) { // kolla om tempCity finns i citySaved
            check = citySaved.some(function (citySaved) { // om ja kryssa för checkbox
                return citySaved.stadname === tempCity.stadname
            })
        }

        chkBox.checked = check; // om check false, checkbox = ej ikryssad
        form.style.display = "block";
        cityInfo.innerHTML = "<i class='fas fa-home'></i>" + " " + tempCity.stadname + ":<br> Här bor det " + tempCity.population + " <i class='fas fa-user-friends'></i>";
    }

    function elementClick() { // ta reda på vad användaren klickar
        let element = event.target;

        if (allCountries.includes(element.innerHTML)) { // Om man har klickat på ett land och det finns med i allCountries

            addCityToPage(element) // gå till addCityToPage för att lägga ut städer på webbsidan

        } else if (allCities.includes(element.innerHTML)) { // har man klickat på stad så går vi till addCityDesc
            addCityDesc(element);
        }
    }

    function selectChkBox() {

        if (chkBox.checked === true) {
            citySaved.push(tempCity) // tempCity sparas i array om man kryssar i checkbox
            saveToStorage()
            displayPlaces()

        } else if (chkBox.checked === false) {
            for (i = 0; i < citySaved.length; i++) {
                if (citySaved[i].stadname === tempCity.stadname) { // rätt stad tas bort från array när användaren 
                    citySaved.splice(i, 1) // tar bort kryss för checkbox
                    saveToStorage()
                    displayPlaces()
                }
            }
        }
    }
}

function displayPlaces() {
    let population;
    summary.innerHTML = "";
    if (localStorage.getItem(storageIndex) && localStorage.getItem(storageIndex) !== "[]") {
        text = "Du har besökt: " + "<br><br>"
        citySaved.forEach(function (citySaved) {
            text += citySaved.stadname + "<br>";
        })
        population = citySaved.reduce(function (total, citySaved) {
            return citySaved.population + total;
        }, 0)
        text += "<br>" + "Vet du om att du har haft chansen att träffa " + population + " personer <i class='fas fa-smile-wink'></i>"
        summary.innerHTML = text; // skriv ut besökta städer som finns sparad i array (citySaved)

    } else {
        text = "Du har inga besökta städer och inte heller träffat någon <i class='fas fa-sad-tear'></i> "; // standard utskrift vid inga besökta städer
        summary.innerHTML = text;
    }
}

function checkLocalStorage() {
    if (localStorage.getItem(storageIndex)) {
        citySaved = getDataFromStorage()
    }
}

function saveToStorage() {
    localStorage.setItem(storageIndex, JSON.stringify(citySaved))
}

function getDataFromStorage() {
    return JSON.parse(localStorage.getItem(storageIndex));
}

function clearData() {
    localStorage.clear();
    window.location.reload();
}
