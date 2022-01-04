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
import displayListItemInfo from "./displayListItemInfo";
import addListnerToAddListButton from "./addNewListButton";
import createListPopUp from "./addListPopUp";
import addListnerToPopUpAddListButton from "./addListnerToPopUpAddListButton";
import './style.css';



createTaskPopUp();
createListPopUp();
displayWebPage();

let taskDate = format(new Date(), "yyyy-MM-dd");
let listArray = [];

//testItems
// const testItem = todoItemFactory("Eat Pizza", "Insert Pizza into mouth", taskDate, "High");
// const testItem1 = todoItemFactory("Wash dishes", "With soap AND water", taskDate, "High");
// const testItem2 = todoItemFactory("Put away dishes", "STACK dishes in cabinet", taskDate, "High");
// const testItem3 = todoItemFactory("Clean Oven", "With water AND soap", taskDate, "High");
// const testItem4 = todoItemFactory("Sweep kitchen", "With a BROOM", taskDate, "High");

const createNewTodoList = (name) => {
    let newArray = [];
    newArray.name = name;
    listArray.push(newArray);
    return listArray.length - 1;
}


const mainListIndex = createNewTodoList("Main List");
let currentList = listArray[mainListIndex];
// currentList.push(testItem);
// currentList.push(testItem1);
// currentList.push(testItem2);
// currentList.push(testItem3);
// currentList.push(testItem4);



displayList(currentList);
addListnerToPopUpAddButton(currentList)
addListnerToPopUpAddListButton(listArray);

addListenerToDeleteButtons(currentList);

addListnerToAddButton();

displayListArray(listArray);

const listArrayDivs = document.querySelectorAll(".list-array-item");

for (let listItem of listArrayDivs) {

    listItem.addEventListener('click', () => {
        clearListDiv();
        currentList = listArray[listItem.getAttribute('index')];
        displayList(currentList);
        addListnerToPopUpAddButton(currentList);
        addListenerToDeleteButtons(currentList);
        displayListItemInfo(currentList);

    })
}
addListnerToAddListButton();
displayListItemInfo(currentList);

export default createNewTodoList;