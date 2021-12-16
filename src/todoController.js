import './style.css'
import todoModel from './todoModel';
import todoView from './todoView';

todoView.displayTodoList(todoModel.getTodoList());