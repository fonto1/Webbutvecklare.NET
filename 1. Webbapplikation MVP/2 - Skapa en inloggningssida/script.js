let inputLog = document.getElementById('login');
let inputPass = document.getElementById('password');
let loginButton = document.getElementById('loginButton');      // hämta element från html


let divRatt = document.createElement('div');
let rattText = document.createTextNode("Du har rätt lösenord, välkommen");
divRatt.appendChild(rattText);                                 // skapar div som skriver ut välkomtext
document.body.appendChild(divRatt).style.display = "none";


let divFel = document.createElement('div');
let felText = document.createTextNode("Du har angivit fel lösenord och kommit fel");  // skapar div som skriver ut fel inlogg
divFel.appendChild(felText);                                                         
document.body.appendChild(divFel).style.display = "none";

let logOutButton = document.createElement('button');
logOutButton.innerHTML = "logout";
logOutButton.style.display.visibility = 'hidden';              // skapa logout button


let retryButton = document.createElement('button');
retryButton.innerHTML = "retry";
retryButton.style.display.visibility = 'hidden';              // skapa retry button

const localIdx = "a";                  // konstant key
check();       // När sidan laddas görs en check om användaren är inloggad


function check(){
    if(localStorage.getItem(localIdx) === "true" ){

        document.body.appendChild(divRatt).style.display = "block";
        document.body.appendChild(logOutButton);
        logOutButton.style.visibility = 'visible';       // om användaren är inloggad eller om användaren har skrivit ut rätt namn/lösenord
        inputLog.style.visibility = 'hidden';            // så syns välkomst texten,samtidigt som input fälten och login knappen göms
        inputPass.style.visibility = 'hidden';          // logout knapp görs synlig
        loginButton.style.visibility = 'hidden';   

        
    }

}

logOutButton.addEventListener('click', function(){
        localStorage.removeItem(localIdx);

        inputLog.style.visibility = 'visible';
        inputPass.style.visibility = 'visible';            // om användaren loggar ut så skapas startsidan igen
        loginButton.style.visibility = 'visible';          // logout knapp och div som skriver ut välkomsttext göms
        logOutButton.style.visibility = 'hidden';         // login/password fält  + login knapp syns
        document.body.appendChild(divRatt).style.display = "none";


})
retryButton.addEventListener('click', function(){

    inputLog.style.visibility = 'visible';
    inputPass.style.visibility = 'visible';            // om användaren trycker på retry så göms retryknappen
    loginButton.style.visibility = 'visible';          // inputfältarna för login/password och login knapp syns
    retryButton.style.visibility = 'hidden';         
    document.body.appendChild(divFel).style.display = "none";

})

loginButton.addEventListener('click', function(){
    const user = "test";
    const pass = "1234";
    let checkUsr = inputLog.value;
    let checkPass = inputPass.value;                      // rätt username och password sätt som konstant,                                                  
    inputLog.value = null;                               // medans vi tar värde från login/password fält och lägger på varibel checkUsr och checkPass
    inputPass.value = null;

    if(user === checkUsr && pass === checkPass){
                 
        localStorage.setItem(localIdx, "true"); // kontroll av vårt username och lösenord, om sant sätter vi localstorage till true och gå till check()
        check();
    }
    else {
        document.body.appendChild(divFel).style.display = "block";
        document.body.appendChild(retryButton);
        retryButton.style.visibility = 'visible';   
        inputLog.style.visibility = 'hidden';               // om lösenord är fel skapar vi felsida och gömmer login +password + login knapp
        inputPass.style.visibility = 'hidden';              // samtidigt som vi gör retry knapp synlig 
        loginButton.style.visibility = 'hidden';       
    }
});


