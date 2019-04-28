const todosTable = document.getElementById('todosTable');
const todosApp = document.getElementById('todosApp');
const todoAddInputText = document.getElementById('todoAddInputText');

todoList = {
    _todos: [],

    get todos() {
        return this._todos;
    },

    todoAdd(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
    },

    todoDelete(position) {
        this._todos.splice(position, 1);
    },

    todoChange(position, todoText) {
        this._todos[position].todoText = todoText;
    },

    todoToggleCompleted(position) {
        let todoStatus = this._todos[position];
        todoStatus.completed = !todoStatus.completed;
    },

    todoToggleAllCompleted() {
        if (this.todos.every((value) => value.completed === true)) {
            this.todos.forEach(todo => {
                todo.completed = !todo.completed;
            });

        } else {
            this.todos.forEach(todo => {
                todo.completed = true;
            });

        };
    }
};



todoDomModifiers = {
    todoShow() {
        //let firstRow = todosTable.rows[0].innerHTML
        todosTable.innerHTML = ''
        todoList.todos.forEach(this.addTodoTableRow)
    },

    todoAdd() {
        if (todoAddInputText.value !== '') {
            todoList.todoAdd(todoAddInputText.value);
            todoAddInputText.value = ''
        }

        this.todoShow();
    },

    todoChange(position, value) {
        todoList.todoChange(position, value)
        this.todoShow();
    },

    todoDelete(position) {
        todoList.todoDelete(position)
        this.todoShow();
    },

    todoToggleAllCompleted() {
        todoList.todoToggleAllCompleted();
        this.todoShow();
    },

    todoToggleCompleted(position) {
        todoList.todoToggleCompleted(position)
        this.todoShow();
    },

    todoTextToInput(index) {
        let itemCell = document.getElementById(index).children[1];
        let currentText = itemCell.textContent;
        itemCell.innerHTML = '';
        let itemInput = document.createElement('input');
        itemInput.type = 'text';
        itemInput.className = 'form-control';
        itemInput.id = 'to-update'
        itemInput.value = currentText;
        itemCell.appendChild(itemInput);
    },

    addTodoTableRow(todoObj, index) {
        let newTodoRow = todosTable.insertRow(-1)
        newTodoRow.id = index;
        let todoToggleCell = newTodoRow.insertCell(0)
        todoToggleCell.className = 'todo-toggle-cell';
        let todoItemCell = newTodoRow.insertCell(1);
        todoItemCell.className = 'todo-item-cell';
        let todoDeleteCell = newTodoRow.insertCell(2);
        todoDeleteCell.className = 'todo-delete-cell';
        let newItemCellText = document.createTextNode(todoObj.todoText)
        todoToggleCell.appendChild(todoDomModifiers.createToggleButton(todoObj.completed))
        todoItemCell.appendChild(newItemCellText);
        if (todoObj.completed) {
            todoItemCell.style.textDecoration = 'line-through';
        };
        todoDeleteCell.appendChild(todoDomModifiers.createDeleteButton())
    },

    createDeleteButton() {
        let deleteButton = document.createElement('button');
        let deleteButtonSpan = document.createElement('span');
        deleteButton.className = 'deleteButton close text-danger';
        deleteButton.type = 'button'
        deleteButton.setAttribute('aria-label', 'Close')
        deleteButton.innerHTML = '&times;'
        return deleteButton;
    },

    createToggleButton(isChecked) {
        let toggleButton = document.createElement('input');
        toggleButton.type = 'checkbox';
        toggleButton.className = 'toggleButton';
        if (isChecked) {
            toggleButton.checked = true;
        } else {
            toggleButton.checked = false;
        }
        return toggleButton;
    },

    todosEventListeners() {
        todosApp.addEventListener('click', (event) => {
            let toUpdate = document.getElementById('to-update')
            if (event.target.className.slice(0, 12) === 'deleteButton') {
                todoDomModifiers.todoDelete(event.target.parentNode.parentNode.id);
            } else if (event.target.id === 'todoAddButton') {
                todoDomModifiers.todoAdd()
            } else if (event.target.id === 'todoToggleAllCompletedButton') {
                todoDomModifiers.todoToggleAllCompleted()
            } else if (event.target.className === 'todo-item-cell' && toUpdate === null) {
                todoDomModifiers.todoTextToInput(event.target.parentNode.id)
            } else if (toUpdate !== null && event.target.id !== 'to-update') {
                ;
                todoDomModifiers.todoChange(toUpdate.parentNode.parentNode.id, toUpdate.value)
            }
        });
        todosApp.addEventListener('change', (event) => {

            if (event.target.className === 'toggleButton') {
                todoDomModifiers.todoToggleCompleted(event.target.parentNode.parentNode.id);
            }
        });
        todosApp.addEventListener('keyup', function (e) {
            if (e.keyCode === 13 && event.target.id === 'todoAddInputText') {
                todoDomModifiers.todoAdd()
            }
            if (e.keyCode === 13 && event.target.id === 'to-update') {
                todoDomModifiers.todoChange(event.target.parentNode.parentNode.id, event.target.value)
            }
        });

    }
}

todoDomModifiers.todosEventListeners();
todoDomModifiers.todoShow()