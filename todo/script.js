// Function to add a new task to the list

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    
    if (taskValue) {
      const taskList = document.getElementById('taskList');
      const taskItem = document.createElement('li');
      

      const taskText = document.createElement('span');
      taskText.textContent = taskValue;
  

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-btn');
      deleteButton.onclick = function () {
        taskItem.remove();
      };

      
      taskItem.appendChild(taskText);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  
      taskInput.value = ''; // Clear input field
    }
  }
  
  // Optional: Allow pressing "Enter" to add task
  document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
  