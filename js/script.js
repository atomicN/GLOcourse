const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

let todoData = [];  

const render = () => {
    localStorage.todoData = JSON.stringify(todoData);
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';
    todoData.forEach( item => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `<span class="text-todo">${item.text}</span>
                        <div class="todo-buttons">
                            <button class="todo-remove"></button>
                            <button class="todo-complete"></button>
                        </div>`;
        if (item.completed) 
            todoCompleted.append(li); 
        else 
            todoList.append(li);
        
        li.querySelector('.todo-complete').addEventListener('click', e => {
            item.completed = !item.completed;
            render();
        });
        li.querySelector('.todo-remove').addEventListener('click', e => {
            todoData.shift(item);
            JSON.parse(localStorage.todoData).shift(item);
            render();
        });
    });
    
};

todoControl.addEventListener('submit', event => {
    event.preventDefault();

    const newToDo = {
        text: headerInput.value,
        completed: false
    };

    if (headerInput.value.trim() != '') {
        todoData.push(newToDo);
    }
    headerInput.value = '';
    
    render();
});

document.addEventListener('DOMContentLoaded', () => {
    todoData = JSON.parse(localStorage.todoData);
    render();
});

