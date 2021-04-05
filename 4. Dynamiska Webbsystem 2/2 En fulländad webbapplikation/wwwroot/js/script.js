let key = "VgavwUC9voBguJRtX3UTeFOTIz8lAmsFfDMnTD4W";
let select = document.querySelectorAll(".link");
let text = document.getElementById("text");
let button = document.getElementById("button")
let calendar = document.getElementById("calendar");
let images = document.getElementById("images");
let newRovers = document.getElementById("newRovers")
let Rat = document.getElementById("Rat")
let Ox = document.getElementById("Ox")
let Tiger = document.getElementById("Tiger")
let rovButton = document.querySelectorAll(".rovButton");
let rovInfo = document.getElementById("rovInfo");
let day;
let rover;






button.addEventListener('click', function () {
    let date = new Date(calendar.value);
    let year = date.getFullYear() - 2;
    let month = date.getMonth() + 1;
    let day = date.getDate();
    day = year + "-" + month + "-" + day;

    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + day + "&api_key=" + key;

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);

            images.innerHTML = "";

            if (myJson.photos.length < 1) {
                images.innerHTML = "No Image For This Day!"
            } else {

                let imgMax = myJson.photos.length - 1;
                let randomImg = Math.floor(Math.random() * imgMax);
                console.log(imgMax);
                console.log(randomImg);
                let img = document.createElement("img");
                img.src = myJson.photos[randomImg].img_src;
                images.appendChild(img);

            }
        })
})

fetch("http://localhost:6600/Api/bots") // first endpoint display all Rovers (just rename all the buttons to bot name)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);


        myJson.forEach(function (rov) {
            rovButton.forEach(function (button) {


                if (button.id == rov.name) {
                    button.value = rov.name
                }
            })
        })
    })

select.forEach(function (selector) {
    selector.addEventListener('click', function (e) {

        if (e.target.innerText != "") {
            rover = e.target.innerText;
        }

        if (e.target.alt != null) {
            rover = e.target.alt;
        }
        text.innerHTML = rover;
    });
});

rovButton.forEach(function (click) // endpoint foreach Rover x3
    {

        click.addEventListener('click', function (e) {
            let rov = e.target.id;
            let url = "http://localhost:6600/Api/bots/" + rov;

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((myJson) => {
                    console.log(myJson)
                    let txt = document.createElement("h6")
                    txt.innerText= `Rovername: ${myJson[0].name}
                                    Color: ${myJson[0].color} 
                                    Cameras: ${myJson[0].camera}
                                    Wheels: ${myJson[0].wheel}
                                    Weight: ${myJson[0].weight}
                                    MaxSpeed: ${myJson[0].name}
                                    LaunchDate: ${myJson[0].launchDate}`
                                    ;
                    rovInfo.appendChild(txt);
                })
        })
    })