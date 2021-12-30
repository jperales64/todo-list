import todoItemFactory from "./todoItem";
import displayList from "./listDisplayer";
import clearListDiv from "./clearListDiv";
import addListenerToDeleteButtons from "./deleteListItem";
import { format } from "date-fns";

const addListnerToPopUpAddButton = (currentList) => {

    const addTaskToListButton = document.querySelector(
        ".add-task-to-list-button"
    );

    const popUpForm = document.querySelector(".wrapper");
    let taskTitle,
        taskDescription,
        taskPriority = "";

    let taskDate = format(new Date(), "yyyy-MM-dd");

    addTaskToListButton.onclick = () => {

        if (document.querySelector(".task-title").value != "") {
            taskTitle = document.querySelector(".task-title").value;

            if (document.querySelector(".task-description").value != "") {
                taskDescription = document.querySelector(".task-description").value;
            }

            if (document.querySelector(".task-date").value != '')
                taskDate = document.querySelector(".task-date").value;

            if (document.querySelector(".task-priority").value != "") {
                taskPriority = document.querySelector(".task-priority").value;
            }

            currentList.push(
                todoItemFactory(taskTitle, taskDescription, taskDate, taskPriority)
            );

            document.querySelector(".task-title").value =
                document.querySelector(".task-title").defaultValue;
            document.querySelector(".task-description").value =
                document.querySelector(".task-description").defaultValue;
            document.querySelector(".task-date").value =
                document.querySelector(".task-date").defaultValue;
            document.querySelector(".task-priority").value =
                document.querySelector(".task-priority").defaultValue;

            clearListDiv();
            displayList(currentList);
            addListenerToDeleteButtons(currentList);
            popUpForm.classList.toggle("disabled");
            popUpForm.classList.toggle("dimmer");
        }
    };
};

export default addListnerToPopUpAddButton;