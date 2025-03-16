document.addEventListener("DOMContentLoaded", () => {
  const formTask = document.getElementById('create-task-form'); // Corrected ID
  const taskList = document.getElementById('tasks'); // Corrected ID
  const taskInput = document.getElementById('new-task-description');

  if (!formTask || !taskList || !taskInput) {
    console.error("One or more required elements not found in the DOM.");
    return;
  }

  formTask.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskDescription = taskInput.value.trim();

    if (taskDescription === "") {
      alert("Please enter a task description.");
      return;
    }

    const li = document.createElement('li');
    li.textContent = taskDescription;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Del';
    deleteButton.style.marginLeft = '25px';
    deleteButton.addEventListener('click', () => li.remove());

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
  });
});