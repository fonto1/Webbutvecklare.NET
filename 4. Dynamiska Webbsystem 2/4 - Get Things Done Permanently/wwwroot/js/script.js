
let workListDisplay = document.getElementById("workListDisplay");
let taskDisplay = document.getElementById("taskDisplay");
let workListNameInput = document.getElementById("editWorkListNameInput");
let taskListNameInput = document.getElementById("editTaskNameInput");
let currentWorkListId= "";
let currentTaskId="";



document.getElementById("editWorkListNameButton").addEventListener('click',function(e){
            e.preventDefault();
            fetch('http://localhost:6600/api/worklist/'+currentWorkListId, {
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              },
              method: 'PUT',
              body: JSON.stringify({
                name: workListNameInput.value,
              })
            }).then(()=>{
              workListNameInput.value ="";
              FetchWorkList();})
})

Start()

document.getElementById("newWorkListAddButton").addEventListener('click', AddworkList);  // Call function to create new Worklist
document.getElementById("newTaskAddButton").addEventListener('click', Addtask) // call function to create new task

workListDisplay.addEventListener('click', function (e) {   // see where we click in UL-list
  let allLi = workListDisplay.querySelectorAll("li")
  allLi.forEach(items=>{
    if(items.className == "list-group-item active")
    {
      items.className ="list-group-item"
    }
  })
  if(e.target.className == "list-group-item")
    {
        e.target.className = "list-group-item active";    
        workListNameInput.value = e.target.innerText;
        currentWorkListId = e.target.id;
        taskListNameInput.value ="";
        FetchTask();
    }
    if(e.target.className == "fas fa-trash" && e.target.parentElement.id !=null)  // remove worklist if we click awesomefont-icon
    {
        RemoveWorkList(e.target.parentElement.id);
    }
})

function RemoveWorkList(id)
{
  fetch('http://localhost:6600/api/worklist/'+id, {
    method: 'DELETE'
  }).then(()=>{
    taskDisplay.innerHTML = "";
    workListNameInput.value ="";
    FetchWorkList();
  });
}


function AddworkList(e) {
  e.preventDefault()
  let worklistName = document.getElementById("newWorkListName");
  fetch('http://localhost:6600/api/worklist', {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: 'POST',
    body: JSON.stringify({
      name: worklistName.value,
    })
  }).then(() =>{ 
    worklistName.value ="";
    workListNameInput.value ="";
    FetchWorkList();})
}



function Start() {
  FetchWorkList();
}


function FetchWorkList() {
  fetch('http://localhost:6600/api/worklist')
    .then((response) => {
      return response.json();
    })
    .then((workListData) => {
      if (workListData.length > 0) {
        AddWorkListToPage(workListData);
      }
    })
};



function AddWorkListToPage(data) {  // append fetched data to page (worklist)
  workListDisplay.innerHTML = "";
  taskDisplay.innerHTML="";
  data.forEach(element => {
    let awesomefont = document.createElement("i");
    awesomefont.className = "fas fa-trash";
   

    let li = document.createElement("li");
    li.className = "list-group-item";
    li.id = element.workListId;

    let workListName = document.createTextNode(element.name);

    li.appendChild(awesomefont);
    li.appendChild(workListName);
    workListDisplay.appendChild(li);
  });
};


function FetchTask(){
  fetch('http://localhost:6600/api/worklist/'+currentWorkListId+'/task')
    .then((response) => {
      return response.json();
    })
    .then((taskData) => {
          if(taskData.length>0)
          {
            AddTaskToPage(taskData);
          }
          else{
          taskDisplay.innerHTML = "";
          }
    })
};


function AddTaskToPage(data) {  // append fetched data to page (worklist)
  taskDisplay.innerHTML = "";
  data.forEach(element => {
    let awesomefont = document.createElement("i");
    awesomefont.className = "fas fa-trash";
   

    let li = document.createElement("li");
    li.className = "list-group-item";
    li.id = element.taskId;

    let workListName = document.createTextNode(element.name);

    li.appendChild(awesomefont);
    li.appendChild(workListName);
    
    if(element.done == false)
    {
      let uncheck = document.createElement("i");
      uncheck.className = "far fa-square";
      li.appendChild(uncheck);
    }
    else if(element.done == true)
    {
      let check = document.createElement("i");
      check.className = "far fa-check-square green";
      li.appendChild(check);
    }


    taskDisplay.appendChild(li);
  });
};


taskDisplay.addEventListener('click', function (e) {   // see where we click in UL-list
  let allLi = taskDisplay.querySelectorAll("li")
  allLi.forEach(items=>{
    if(items.className == "list-group-item active")
    {
      items.className ="list-group-item"
    }
  })

  if(e.target.className == "list-group-item")
    {
        e.target.className = "list-group-item active";  
        taskListNameInput.value = e.target.innerText;
        currentTaskId = e.target.id;
        
    }
    if(e.target.className == "fas fa-trash" && e.target.parentElement.id !=null)  // remove worklist if we click awesomefont-icon
    {
     RemoveTaskList(e.target.parentElement.id);
    }

    if(e.target.className == "far fa-square" && e.target.parentElement.id !=null)  // remove worklist if we click awesomefont-icon
    {
       ChangeTaskStatus(e.target.parentElement.id,true);
      
    }
     if(e.target.className == "far fa-check-square green" && e.target.parentElement.id !=null)  // remove worklist if we click awesomefont-icon
    {
     
       ChangeTaskStatus(e.target.parentElement.id,false);
    }
})

  function ChangeTaskStatus(id,bool)
  {
    fetch('http://localhost:6600/api/worklist/'+currentWorkListId+"/task/"+id, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      method: 'PUT',
      body: JSON.stringify({
        done: bool,
      })
    }).then(()=>{
      taskListNameInput.value ="";
     FetchTask();})
  }

  document.getElementById("editTaskNameButton").addEventListener('click',function(e){
    e.preventDefault();
    fetch('http://localhost:6600/api/worklist/'+currentWorkListId+"/task/"+currentTaskId, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      method: 'PUT',
      body: JSON.stringify({
        name: taskListNameInput.value,

      })
    }).then(()=>{
      taskListNameInput.value ="";
     FetchTask();})
  })


function Addtask(e) {
  e.preventDefault()
  let taskName = document.getElementById("newTaskInput");
  fetch('http://localhost:6600/api/worklist/'+currentWorkListId+"/task", {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    method: 'POST',
    body: JSON.stringify({
      name: taskName.value,
    })
  }).then(() =>{ 
    taskName.value ="";
    editTaskNameInput.value="";
    FetchTask();})
}

function RemoveTaskList(e)
{
  fetch('http://localhost:6600/api/worklist/'+currentWorkListId+"/task/"+e, {
    method: 'DELETE'
  }).then(()=>{
    workListNameInput.value="";
    FetchTask();
  });
}

