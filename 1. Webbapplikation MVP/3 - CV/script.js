let uList = document.getElementById("uList");


fetch("https://api.github.com/users/fonto1/repos")
.then(response =>{
    return response.json();
})
.then(data =>{
   
    for(i=0; i < data.length; i++){
        let list = document.createElement('li');
       list.className = 'col-sm-3 col-md-4 d-flex';
        let link = document.createElement('a');
        let linkText = document.createTextNode(data[i].html_url.substring(26,));

        link.setAttribute ('href',data[i].html_url);
        link.setAttribute('target', "_black");
        
        link.appendChild(linkText);
        list.appendChild(link);
        uList.appendChild(list);
      }

})
.catch(err => {
    console.log(err);
})



  
