document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to create a new task item
    function createTaskItem(taskText) {
        const li = document.createElement('li');
        
        // Task text
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        // Complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        li.appendChild(completeBtn);

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove');
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(removeBtn);

        return li;
    }

    // Add task button event listener
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const newTaskItem = createTaskItem(taskText);
            taskList.appendChild(newTaskItem);
            taskInput.value = '';
        }
    });

    // Optional: Allow pressing "Enter" to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
