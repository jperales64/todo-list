import './style.css'
import todoModel from './todoModel';
import todoView from './todoView';

todoModel.addTodoListItem("Eat", "Put food in mouth", "today", "high");
todoModel.addTodoListItem("the", "Put food in mouth", "today", "high");
todoModel.addTodoListItem("Pussy", "Put food in mouth", "today", "high");

todoView.displayTodoList(todoModel.getTodoList());