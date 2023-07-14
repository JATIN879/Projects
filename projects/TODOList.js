document.addEventListener("DOMContentLoaded", function() {
  const todoInput = document.getElementById("todoInput");
  const addButton = document.getElementById("addButton");
  const todoList = document.getElementById("todoList");

  addButton.addEventListener("click", function() {
    const task = todoInput.value.trim();

    if (task !== "") {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const upButton = document.createElement("button");
      const downButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      
      span.textContent = task;
      upButton.textContent = "↑";
      downButton.textContent = "↓";
      deleteButton.textContent = "Delete";

      upButton.addEventListener("click", function() {
        const currentTask = this.parentNode;
        const previousTask = currentTask.previousSibling;

        if (previousTask !== null) {
          todoList.insertBefore(currentTask, previousTask);
        }
      });

      downButton.addEventListener("click", function() {
        const currentTask = this.parentNode;
        const nextTask = currentTask.nextSibling;

        if (nextTask !== null) {
          todoList.insertBefore(nextTask, currentTask);
        }
      });

      deleteButton.addEventListener("click", function() {
        const currentTask = this.parentNode;
        todoList.removeChild(currentTask);
      });

      li.appendChild(span);
      li.appendChild(upButton);
      li.appendChild(downButton);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
      todoInput.value = "";
    }
  });
});

  