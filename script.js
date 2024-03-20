const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className = 'taskItem';
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="editBtn">Edit</button>
    <button class="deleteBtn">Delete</button>
  `;
  taskList.appendChild(taskItem);

  taskInput.value = '';

  const deleteBtn = taskItem.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  const editBtn = taskItem.querySelector('.editBtn');
  editBtn.addEventListener('click', () => {
    const span = taskItem.querySelector('span');
    const newText = prompt('Enter new task', span.textContent.trim());
    if (newText !== null) {
      span.textContent = newText.trim();
    }
  });
}
