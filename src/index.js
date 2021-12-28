import todoItemFactory from "./todoItem";
import displayList from "./listDisplayer";
import displayWebPage from "./webPage";
import addListenerToDeleteButtons from "./deleteListItem";
import addListnerToAddButton from "./addTaskToListButton";
import createTaskPopUp from "./addTaskPopUp";
import addListnerToPopUpAddButton from "./addListnerToPopUpAddButton";

import './style.css';


createTaskPopUp();
displayWebPage();

// //testItems
// const testItem = todoItemFactory("Eat Pizza", "Insert Pizza into mouth", "tomorrow", "High");
// const testItem1 = todoItemFactory("Wash dishes", "With soap AND water", "tomorrow", "High");
// const testItem2 = todoItemFactory("Put away dishes", "STACK dishes in cabinet", "tomorrow", "High");
// const testItem3 = todoItemFactory("Clean Oven", "With water AND soap", "tomorrow", "High");
// const testItem4 = todoItemFactory("Sweep kitchen", "With a BROOM", "tomorrow", "High");

const createNewTodoList = () => {
    return [];
}

const mainList = createNewTodoList();


displayList(mainList);
addListnerToPopUpAddButton(mainList)

addListenerToDeleteButtons(mainList);

addListnerToAddButton();