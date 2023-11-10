//initializing mostly used elements in the global
let addTaskButton = document.getElementById("add-task-btn");
//task section is the section where the tasks are scored
let taskSection = document.getElementById("tasks-section");
//event where a task is added
addTaskButton.addEventListener("click", function () {
   //getting value from user input
   let taskTitleInput = document.getElementById("taskTitle");
   let taskDescInput = document.getElementById("taskDesc");
   let taskTitle = taskTitleInput.value;
   let taskDesc = taskDescInput.value;

   if (taskTitle && taskDesc) {
      //creating and element called div
      let i = document.createElement("div");
      //assign class to of task-box
      i.classList = "task-box";
      //adding innerHTML div
      i.innerHTML += `
  
                 
                         <div class="task-header">
                             <div class="task-name" id="task-title">${taskTitle}</div>
                             <div class="task-actions">
                                 <div class="delete-task" id="delete-task" ><i class="fa fa-trash"></i></div>
                                 <div class="edit-name"><i class="fa fa-edit"></i></div>
                             </div>
                         </div>
                         <div class="divider"></div>
                         <div class="task-body">
                             <div class="task-description">${taskDesc}</div>
                             <div class="task-mark" id="btn">Mark as Done</div>
                         </div>
              
                   
                 `;
      //appending the newly created div the section of tasks
      taskSection.appendChild(i);
      //emptying input
      taskTitleInput.value = "";
      taskDescInput.value = "";
   } else {
      alert("Empty Values");
   }

   //selecting all elements from the div task-mark and adding
   let markAsDoneButtons = document.querySelectorAll(".task-mark");
   //iterating over each element and assigning eventlistener to eachone
   markAsDoneButtons.forEach(function (currentButton) {
      currentButton.addEventListener("click", doneTask);
   });

   function doneTask(event) {
      //targeting the closet element called (task-mark) from where the event is pressed
      let taskContainer = event.target.closest(".task-mark");
      taskContainer.style.backgroundColor = "green";
   }
   //editing title section
   let editTitle = document.querySelectorAll(".edit-name"); //adding all elements with edit-name class in a variable
   //looping over every each element assigning an event listener to it
   editTitle.forEach(function (titleEdit) {
      titleEdit.addEventListener("click", edit);
   });

   function edit(event) {
      //calling this function will set the edit section display from none to inline
      displayPopUp("inline");
      //targeting the closet task-box div to have access over all other elements of the task (title and description)
      let taskContainer = event.target.closest(".task-box");
      let editTaskButton = document.getElementById("edit-task-btn");

      editTaskButton.addEventListener("click", function () {
         let inputs = getInput();

         if (inputs.title && inputs.description) {
            //saving the element holding the title in a variable called taskELementTitle
            let taskElementTitle = taskContainer.querySelector(".task-name");
            //changing or setting the title to new one
            taskElementTitle.innerHTML = inputs.title;
            //saving the element holding the description in a variable called taskELementDesc
            let taskElementDesc = taskContainer.querySelector(".task-description");
            //setting the description to new one
            taskElementDesc.innerHTML = inputs.description;
            //calling this function will set the edit section display from inline back to none
            displayPopUp("none");
         } else {
            alert("Empty Values");
         }
      });
   }
   //selecting all elements from the div delete-task
   let deleteButtons = document.querySelectorAll(".delete-task");

   deleteButtons.forEach(function (deleteButton) {
      deleteButton.addEventListener("click", deleteTask);
   });

   function deleteTask(event) {
      //targeting the  closet task-box the parent parent div of the event button clicked to remove it all from the section
      let taskContainer = event.target.closest(".task-box");
      //removing the div from the section that is in the taskContainer variable
      taskContainer.remove();
   }
});
//this function displays the pop up by changing a status parameter if inline will display if none will hide
function displayPopUp(status) {
   displayWindow = document.querySelector(".edit-form");
   displayWindow.style.display = status;
}
//get the ipunt from the pop up and adding it to an object to be recieved when called
function getInput() {
   let newTitle = document.getElementById("editTaskTitle").value;
   let newDesc = document.getElementById("editTaskDesc").value;

   return { title: newTitle, description: newDesc };
}
