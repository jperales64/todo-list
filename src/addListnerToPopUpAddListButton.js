import displayListArray from "./displayListArray";
import clearListDiv from "./clearListDiv";
import createNewTodoList from ".";
import displayList from "./listDisplayer";
import addListnerToPopUpAddButton from "./addListnerToPopUpAddButton";
import addListenerToDeleteButtons from "./deleteListItem";
import displayListItemInfo from "./displayListItemInfo";






const addListnerToPopUpAddListButton = (currentList) => {

    const addTaskToListButton = document.querySelector(
        ".add-list-to-list-button"
    );

    const popUpForm = document.querySelector(".add-list-pop-up-form");
    const wrapper = document.querySelector(".wrapper");
    let taskTitle = "";


    addTaskToListButton.onclick = () => {

        if (document.querySelector(".list-title").value != "") {

            taskTitle = document.querySelector(".list-title").value;

            createNewTodoList(taskTitle);
            const content = document.querySelector(".list-array-div");
            while (content.firstChild) {

                content.removeChild(content.firstChild);

            }
            displayListArray(currentList);
            if (content.style.maxHeight) {

                content.style.maxHeight = content.scrollHeight + "px";
            }

            const listArrayDivs = document.querySelectorAll(".list-array-item");

            for (let listItem of listArrayDivs) {

                listItem.addEventListener('click', () => {
                    clearListDiv();
                    const currentTaskList = currentList[listItem.getAttribute('index')];
                    displayList(currentTaskList);
                    addListnerToPopUpAddButton(currentTaskList);
                    addListenerToDeleteButtons(currentTaskList);
                    displayListItemInfo(currentTaskList);


                })
            }

            document.querySelector(".list-title").value =
                document.querySelector(".list-title").defaultValue;

            popUpForm.classList.add("disabled");
            wrapper.classList.add("disabled")

        }
    };
};

export default addListnerToPopUpAddListButton;