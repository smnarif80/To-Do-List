// selector

const form=document.querySelector(".new-task-form");
const taskInput=document.getElementById("new-task-input");
const taskLists=document.getElementById("tasks");

form.addEventListener("submit", function (event){

    //to avoid browser refresh
    event.preventDefault();

    if(taskInput.value){
        const task=taskInput.value;
    //console.log(task);

    // creating the task div

    const taskEl=document.createElement("div");
    taskEl.classList.add("task");

    //creating content div

    const taskElContent=document.createElement("div");
    taskElContent.classList.add("content");

    //inserting content div to task div
    taskEl.appendChild(taskElContent);

    // inserting task element div to tasks div
    //taskLists.appendChild(taskEl);

    //creating input (task)
    const taskElInput=document.createElement("input");
    taskElInput.classList.add("text");
    taskElInput.value=task;
    taskElInput.setAttribute("readonly", "readonly");

    //inserting input div to content div
    taskElContent.appendChild(taskElInput);

    //creating action div to task div
    const taskElAction = document.createElement("div");
    taskElContent.classList.add("actions");

    //inserting task element div to tasks div
    taskElContent.appendChild(taskElAction);

    //creating edit button
    const taskElEditBtn=document.createElement("button");
    taskElEditBtn.classList.add("edit");
    taskElEditBtn.innerText="EDIT"
   
    //creating delete button
    const taskElDeleteBtn=document.createElement("button");
    taskElDeleteBtn.classList.add("delete");
    taskElDeleteBtn.innerText="DELETE";
    

    //creating complete button
    const taskElCompleteBtn=document.createElement("button");
    taskElCompleteBtn.classList.add("complete");
    taskElCompleteBtn.innerText="MARK CMPLETE";

    //adding all button to action div
    taskElAction.appendChild(taskElEditBtn);
    taskElAction.appendChild(taskElDeleteBtn);
    taskElAction.appendChild(taskElCompleteBtn);

     //inserting task element div to tasks div
     taskLists.appendChild(taskEl);

     //clear the input field
     taskInput.value="";

    // Edit btn

     taskElEditBtn.addEventListener("click" , function(){
        if(taskElEditBtn.innerText.toLowerCase() === "edit") {
            taskElEditBtn.innerText="Save";
            taskElInput.removeAttribute("readonly");
            taskElInput.focus();
        }
        else {
            taskElEditBtn.innerText="Edit";
            taskElInput.setAttribute("readonly", "readonly");
        }
     });

     //Complete btn

     taskElCompleteBtn.addEventListener("click", function(){
        if(taskElCompleteBtn.innerText.toLowerCase()==="mark complete"){
            taskElCompleteBtn.innerText="Completed";
            taskElInput.classList.add("mark-completed");
            taskElCompleteBtn.style.backgroundColor="orange";
        } else{
            taskElCompleteBtn.innerText="mark Complete";
            taskElInput.classList.remove("mark-compled");
            taskElCompleteBtn.style.backgroundColor="#385504";
        }
     });

     //delete button

     taskElDeleteBtn.addEventListener("click", function(){
        if(taskElDeleteBtn.innerText.toLowerCase() === "delete"){
            taskLists.removeChild(taskEl);
        }
     });
    }

     
    else {
        alert("Enter some task");
    }
    
});
