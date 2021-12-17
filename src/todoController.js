import './style.css'
import todoModel from './todoModel';
import todoView from './todoView';

todoModel.addTodoListItem("Dude", "Dude", "Dude", "Dude", "Dude");
todoView.displayTodoList(todoModel.getTodoList());