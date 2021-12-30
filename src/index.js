import todoItemFactory from "./todoItem";
import displayList from "./listDisplayer";
import displayWebPage from "./webPage";
import addListenerToDeleteButtons from "./deleteListItem";
import addListnerToAddButton from "./addTaskToListButton";
import createTaskPopUp from "./addTaskPopUp";
import addListnerToPopUpAddButton from "./addListnerToPopUpAddButton";
import { format } from "date-fns";
import './style.css';


createTaskPopUp();
displayWebPage();

let taskDate = format(new Date(), "yyyy-MM-dd");

//testItems
const testItem = todoItemFactory("Eat Pizza", "Insert Pizza into mouth", taskDate, "High");
const testItem1 = todoItemFactory("Wash dishes", "With soap AND water", taskDate, "High");
const testItem2 = todoItemFactory("Put away dishes", "STACK dishes in cabinet", taskDate, "High");
const testItem3 = todoItemFactory("Clean Oven", "With water AND soap", taskDate, "High");
const testItem4 = todoItemFactory("Sweep kitchen", "With a BROOM", taskDate, "High");

const createNewTodoList = () => {
    return [];
}

const mainList = createNewTodoList();
mainList.push(testItem);
mainList.push(testItem1);
mainList.push(testItem2);
mainList.push(testItem3);
mainList.push(testItem4);

displayList(mainList);
addListnerToPopUpAddButton(mainList)

addListenerToDeleteButtons(mainList);

addListnerToAddButton();