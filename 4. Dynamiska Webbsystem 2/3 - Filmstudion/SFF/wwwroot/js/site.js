let studiosForm = document.getElementById("studios")
let moviesForm = document.getElementById("movies")
let studioCreateButton = document.getElementById("studioCreateButton")
let movieCreateButton = document.getElementById("movieCreateButton")
let movieUrl = "http://localhost:6600/api/movies/"
let studioUrl = "http://localhost:6600/api/studios/"
let triviaUrl = "http://localhost:6600/api/trivia/"
let TriviaName = document.getElementById("TriviaName");
let TriviaStudio= document.getElementById("TriviaStudio");
let editButton = document.getElementById("editStudioButton")
let deleteButton = document.getElementById("deleteStudioButton")
let editCity = document.getElementById("editStudioCity");
let editName = document.getElementById("editStudioName");
let editMovieRentCount = document.getElementById("editMovieRentCount");
let editMovieButton = document.getElementById("editMovieRentButton");
let selectStudio = document.getElementById("selectStudio");   
let TriviaButton = document.getElementById("TriviaButton");
let trivasReview = document.getElementById("trivasReview");
let TriviaDelButton = document.getElementById("TriviaDelButton");

let currentStudio = "";
let currentMovie = "";
let reqs = [movieUrl, studioUrl,triviaUrl];


start();

function start(){

  studiosForm.innerHTML = "";
  moviesForm.innerHTML = "";
  trivasReview.innerHTML ="";
Promise.all(reqs.map(req => // fetch all studios/movies and display to page
    fetch(req)
    .then((response) => {
      return response.json();
    })))
  .then(data => {
    const movies = data[0];
    const studios = data[1];
    const trivia = data[2];
   

    TriviaName.innerHTML="";
    TriviaStudio.innerHTML="";
    let opt1 = document.createElement("option");
    let opt2 = document.createElement("option");
    let mov = document.createTextNode("<Movies>");
    let stud = document.createTextNode("<Studios>");
    opt1.appendChild(mov);
    opt2.appendChild(stud);
    TriviaName.appendChild(opt1);
    TriviaStudio.appendChild(opt2);



    studios.forEach(element => {
      let li = document.createElement("li");
      let text = document.createTextNode(element.name + " (" + element.city + ")");
      let options = document.createElement("option");
      let msg = document.createTextNode(element.name);
      options.appendChild(msg)
      li.appendChild(text);
      studiosForm.appendChild(li);
      TriviaStudio.appendChild(options)

    });

    movies.forEach(element => {
      let li = document.createElement("li");
      let opt = document.createElement("option");
      let text1 = document.createTextNode(element.name);
      let text2 = document.createTextNode(element.name);
      li.appendChild(text1);
      opt.appendChild(text2);
      moviesForm.appendChild(li);
      TriviaName.appendChild(opt);
    });

    trivia.forEach(element => {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode("Studio: " + element.studio));
      li.appendChild(document.createElement("br"));
      li.appendChild(document.createTextNode("Movie: " + element.movie));
      li.appendChild(document.createElement("br"));
      li.appendChild(document.createTextNode("Points: " + element.points));
      li.appendChild(document.createElement("br"));
      li.appendChild(document.createTextNode("-------------------"));
      trivasReview.appendChild(li);
  });
});
}

studioCreateButton.addEventListener('click', function (e) // create new studio
  {
    e.preventDefault()
    let studioName = document.getElementById("studioName")
    let studioCity = document.getElementById("studioCity")
    fetch('http://localhost:6600/api/studios', {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      method: 'POST',
      body: JSON.stringify({
        name: studioName.value,
        city: studioCity.value,
      })
    }).then(()=>{
    studioName.value ="";
    studioCity.value="";
    start();
     } )
  })

movieCreateButton.addEventListener('click', function () // create new movie
  {
    let movieName = document.getElementById("movieName")
    let movieCount = parseInt(document.getElementById("movieRentCount").value);
    fetch('http://localhost:6600/api/movies', {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      method: 'POST',
      body: JSON.stringify({
        name: movieName.value,
        rentcount: movieCount,
      })
    })
  })

  


  function GetOneStudio(currentStudio) // show selected studio 
  {
    let oneStudio = document.getElementById("oneStudio")
  fetch(studioUrl + currentStudio)
    .then((response) => {
      return response.json();
    })
    .then((oneStudioData) => {
      oneStudio.innerHTML = "";
      let movies="";
      if (oneStudioData.moviesInStudio.length == 0) {
        movies = "<br/>None";
        let selectStudio = document.getElementById("selectStudio")
      } else {
        oneStudioData.moviesInStudio.forEach(item=>{
          movies += "<br/>"+ item;
        })
      }
      oneStudio.innerHTML += "Studio Name: " + oneStudioData.name + "<br/>" + "Studio Location: " + oneStudioData.city + "<br/>Movies for Rent" + movies;
      let edit = document.getElementById("edit");
      edit.style.display = "block";
      editName.value = oneStudioData.name;
      editCity.value = oneStudioData.city;
    });
  }

studiosForm.addEventListener('click', function(e){  // filter studioname
  let num = (e.target.innerHTML.indexOf("("));
  currentStudio = e.target.innerHTML.substring(0, num - 1);
  GetOneStudio(currentStudio);
}) 
  


editButton.addEventListener('click', function (e) { // edit name/city for studio
  e.preventDefault()
  fetch(studioUrl + currentStudio, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: 'PUT',
    body: JSON.stringify({
      name: editName.value,
      city: editCity.value,
    })
  }).then(()=>{
  
    GetOneStudio(editName.value);
    editName.value ="";
    editCity.value="";
    start()
  })
})


deleteButton.addEventListener('click', function () { // delete studio
  fetch(studioUrl + currentStudio, {
    method: 'DELETE'
  });
})


TriviaDelButton.addEventListener('click', function () { // delete studio
  fetch(triviaUrl+TriviaName.value, {
    method: 'DELETE'
  });
})


function GetOneMovie(e){
  
  let urlOneMovie = movieUrl + currentMovie;
  let newReqs = [urlOneMovie, studioUrl]

  Promise.all(newReqs.map(newReq => // fetach data to populate select studio input
      fetch(newReq)
      .then((response) => {
        return response.json();
      })))
    .then(data => {
      const oneMovieData = data[0];
      const studioFetch = data[1];
      let oneMovie = document.getElementById("oneMovie")
      oneMovie.innerHTML = "";
      let studios ="";
      if (oneMovieData.rentToStudio.length == 0) {
        studios = "<br/> None";
      } else {
        oneMovieData.rentToStudio.forEach(item=>{
          studios += "<br/>"+ item;
        })
      }

      oneMovie.innerHTML += "Movie Name: " + oneMovieData.name + "<br/>" + "Movie RentCount: " + oneMovieData.rentCount + "<br/>" + "Left To Rent: "+oneMovieData.leftToRent +"<br/>"+ "Available for Studios: " + studios;
      let editMovie = document.getElementById("editMovie");
      editMovie.style.display = "block";
      editMovieRentCount.value = oneMovieData.rentCount;   
      selectStudio.innerHTML="";
      let option = document.createElement("option");
      let text = document.createTextNode("<Change Amount>");
      option.appendChild(text);
      selectStudio.appendChild(option);
      for(i=0;i<studioFetch.length;i++)
      {
            let option = document.createElement("option");
            let text = document.createTextNode(studioFetch[i].name);
            option.appendChild(text);
            selectStudio.appendChild(option); 
      }
    });
}

moviesForm.addEventListener('click', function(e){
  currentMovie = e.target.innerHTML
  GetOneMovie(currentMovie);
})



editMovieButton.addEventListener('click', function (e) {
  e.preventDefault();
  fetch(movieUrl + currentMovie, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: 'PUT',
    body: JSON.stringify({
      rentcount: parseInt(editMovieRentCount.value),
      rentToStudio: [selectStudio.value]
    })
  }).then(()=>{
  GetOneMovie(currentMovie)});
})



TriviaButton.addEventListener('click', function () 
  {
      let point = document.getElementById("TriviaPoints");
    fetch('http://localhost:6600/api/trivia', {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      method: 'POST',
      body: JSON.stringify({
        studio: TriviaStudio.value,
        movie: TriviaName.value,
        points: point.value
      })
    })
  })