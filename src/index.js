import todoItemFactory from "./todoItem";
import displayList from "./listDisplayer";
import displayWebPage from "./webPage";
import addListenerToDeleteButtons from "./deleteListItem";
import addListnerToAddButton from "./addTaskToListButton";
import createTaskPopUp from "./addTaskPopUp";
import addListnerToPopUpAddButton from "./addListnerToPopUpAddButton";
import { format } from "date-fns";
import displayListArray from "./displayListArray";
import clearListDiv from "./clearListDiv";
import './style.css';


createTaskPopUp();
displayWebPage();

let taskDate = format(new Date(), "yyyy-MM-dd");
let listArray = [];

//testItems
const testItem = todoItemFactory("Eat Pizza", "Insert Pizza into mouth", taskDate, "High");
const testItem1 = todoItemFactory("Wash dishes", "With soap AND water", taskDate, "High");
const testItem2 = todoItemFactory("Put away dishes", "STACK dishes in cabinet", taskDate, "High");
const testItem3 = todoItemFactory("Clean Oven", "With water AND soap", taskDate, "High");
const testItem4 = todoItemFactory("Sweep kitchen", "With a BROOM", taskDate, "High");

const createNewTodoList = (name) => {
    let newArray = [];
    newArray.name = name;
    listArray.push(newArray);
    return listArray.length - 1;
}


const mainListIndex = createNewTodoList("Main List");
listArray[mainListIndex].push(testItem);
listArray[mainListIndex].push(testItem1);
listArray[mainListIndex].push(testItem2);
listArray[mainListIndex].push(testItem3);
listArray[mainListIndex].push(testItem4);

const hebListIndex = createNewTodoList("Shit to get at HEB");

displayList(listArray[mainListIndex]);
addListnerToPopUpAddButton(listArray[mainListIndex])

addListenerToDeleteButtons(listArray[mainListIndex]);

addListnerToAddButton();

displayListArray(listArray);

const listArrayDivs = document.querySelectorAll(".list-array-item");

for (let listItem of listArrayDivs) {

    listItem.addEventListener('click', () => {
        clearListDiv();
        displayList(listArray[listItem.getAttribute('index')]);
        addListnerToPopUpAddButton(listArray[listItem.getAttribute('index')])
        addListenerToDeleteButtons(listArray[listItem.getAttribute('index')]);

    })
}