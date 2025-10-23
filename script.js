const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    const newTask = newTaskInput.value.trim();
    if (newTask !== '') {
        const newTaskElement = document.createElement('li');
        newTaskElement.textContent = newTask;
        taskList.appendChild(newTaskElement);
        newTaskInput.value = '';
    }
});