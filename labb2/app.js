let state = {
    tasks: [],
    filter: 'all'
};

const addTask = (tasks, text) => [
    ...tasks,
    { id: Date.now(), text, completed: false }
];

const toggleTask = (tasks, id) => tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
);

const removeTask = (tasks, id) => tasks.filter(task => task.id !== id);

const filterTasks = (tasks, filter) => {
    switch(filter) {
        case 'completed': return tasks.filter(task => task.completed);
        case 'active': return tasks.filter(task => !task.completed);
        default: return tasks;
    }
};

const addNewTask = () => {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    
    if (text) {
        state.tasks = addTask(state.tasks, text);
        input.value = '';
        render();
    }
};

const updateFilter = (event) => {
    state.filter = event.target.value;
    render();
};

const renderTaskItem = ({ id, text, completed }) => {
    const li = document.createElement('li');
    li.className = `task-item ${completed ? 'completed' : ''}`;
    
    li.innerHTML = `
        <input 
            type="checkbox" 
            ${completed ? 'checked' : ''} 
            onchange="toggleTaskStatus(${id})"
        >
        <span>${text}</span>
        <button 
            class="delete-btn" 
            onclick="deleteTask(${id})"
        >
            Удалить
        </button>
    `;
    
    return li;
};

const render = () => {
    const filteredTasks = filterTasks(state.tasks, state.filter);
    const taskList = document.getElementById('taskList');
    
    taskList.innerHTML = '';
    filteredTasks
        .map(renderTaskItem)
        .forEach(task => taskList.appendChild(task));
};

window.toggleTaskStatus = (id) => {
    state.tasks = toggleTask(state.tasks, id);
    render();
};

window.deleteTask = (id) => {
    state.tasks = removeTask(state.tasks, id);
    render();
};

document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addNewTask();
});

render();