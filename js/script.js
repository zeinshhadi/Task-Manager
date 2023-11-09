let addTaskButton = document.getElementById("add-task-btn");

let taskSection = document.getElementById("tasks-section");
let counter = 1;
addTaskButton.addEventListener("click", function () {
   let taskTitleInput = document.getElementById("taskTitle");
   let taskDescInput = document.getElementById("taskDesc");
   let taskTitle = taskTitleInput.value;
   let taskDesc = taskDescInput.value;

   if (taskTitle && taskDesc) {
      taskSection.innerHTML += `
      <div class="task-box" id="taskList" task-id="${counter}">
                     <div class="taskcontaier">
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
                     </div>
                     </div>
                 `;
      counter++;

      taskTitleInput.value = "";
      taskDescInput.value = "";
   } else {
      alert("Empty Values");
   }

   let markAsDoneButtons = document.querySelectorAll(".task-mark");

   markAsDoneButtons.forEach(function (currentButton) {
      currentButton.addEventListener("click", doneTask);
   });

   function doneTask(event) {
      let taskContainer = event.target.closest(".task-mark");
      taskContainer.style.backgroundColor = "green";
   }

   let editTitle = document.querySelectorAll(".edit-name");

   editTitle.forEach((titleEdit) => {
      titleEdit.addEventListener("click", edit);
   });

   function edit(event) {
      displayWindow = document.querySelector(".edit-form");
      displayWindow.style.display = "inline";

      let taskContainer = event.target.closest(".task-box");
      let editTaskButton = document.getElementById("edit-task-btn");

      editTaskButton.addEventListener("click", function () {
         let newTitle = document.getElementById("editTaskTitle").value;
         let newDesc = document.getElementById("editTaskDesc").value;
         if (newTitle && newDesc) {
            let taskElementTitle = taskContainer.querySelector(".task-name");

            taskElementTitle.innerHTML = newTitle;

            let taskElementDesc = taskContainer.querySelector(".task-description");

            taskElementDesc.innerHTML = newDesc;

            displayWindow.style.display = "none";
         } else {
            alert("Empty Values");
         }
      });
   }

   let deleteButtons = document.querySelectorAll(".delete-task");

   deleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener("click", deleteTask);
   });

   function deleteTask(event) {
      let taskContainer = event.target.closest(".task-box");
      taskContainer.remove();
   }
});
