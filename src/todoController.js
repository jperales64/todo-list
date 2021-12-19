import './style.css'
import todoModel from './todoModel';
import todoView from './todoView';

todoView.displayTodoList(todoModel.getTodoList());

const newTaskButton = document.querySelector('.add-button');
newTaskButton.addEventListener('click', todoView.displayPopUp);

const addTaskToListButton = document.querySelector('.add-task-to-list-button');
addTaskToListButton.addEventListener('click', () => {
    todoModel.addTodoListItem(document.querySelector('.task-title').value, 'dude', 'dude', 'dude');
    document.querySelector('.task-title').value = document.querySelector('.task-title').defaultValue;
    todoView.displayTodoList(todoModel.getTodoList());
    todoView.displayPopUp();
});