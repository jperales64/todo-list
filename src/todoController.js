import './style.css'
import todoModel from './todoModel';
import todoView from './todoView';

todoView.displayTodoList(todoModel.getTodoList());
let taskItems = document.querySelectorAll('.list-item-div');

const newTaskButton = document.querySelector('.add-button');
newTaskButton.addEventListener('click', todoView.displayPopUp);



const addTaskToListButton = document.querySelector('.add-task-to-list-button');


const addListners = () => {
    let taskItems = document.querySelectorAll('.list-item-div');
    let count = 0;
    for (let listItem of taskItems) {

        listItem.addEventListener("click", function() {
            todoView.displayToDoItemInfo(todoModel.getTodoItem(listItem.getAttribute('data')));
        });
        count++;
    }
}


addTaskToListButton.addEventListener('click', () => {

    if (document.querySelector('.task-title').value != '') {
        todoModel.addTodoListItem(document.querySelector('.task-title').value, 'dude', 'dude', 'dude');
        document.querySelector('.task-title').value = document.querySelector('.task-title').defaultValue;
        todoView.displayTodoList(todoModel.getTodoList());
        taskItems = document.querySelectorAll('.list-item-div');
        todoView.displayPopUp();
        addListners();
    }
});