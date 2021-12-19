import { add } from "date-fns";

const todoView = (() => {
    const container = document.querySelector(".content");

    //creates popup
    const popUpForm = document.createElement("div");
    popUpForm.classList.add("pop-up-form", "disabled");
    const taskTitile = document.createElement("input");
    taskTitile.setAttribute("type", "text");
    taskTitile.classList.add("task-title");
    taskTitile.addEventListener('click', () => {
        taskTitile.select();
    });
    taskTitile.placeholder = "Task Title";
    popUpForm.appendChild(taskTitile);
    const addTaskToListButton = document.createElement("button");
    addTaskToListButton.textContent = "Add Task";
    addTaskToListButton.classList.add("add-task-to-list-button");
    popUpForm.appendChild(addTaskToListButton);

    //creates toolbar
    const toolBar = document.createElement("div");
    toolBar.classList.add("tool-bar");

    const addButton = document.createElement("button");
    addButton.classList.add("add-button");
    addButton.textContent = "Create a Task";

    toolBar.appendChild(addButton);

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main-div");

    const listDiv = document.createElement("div");
    listDiv.classList.add("list-div");

    mainDiv.appendChild(listDiv);
    container.appendChild(toolBar);
    container.appendChild(mainDiv);
    document.body.append(popUpForm);

    const displayTodoList = (todoList) => {
        while (listDiv.firstChild) {
            listDiv.removeChild(listDiv.firstChild);
        }
        for (let listItem of todoList) {
            const listItemDiv = document.createElement("div");
            const listItemTitle = document.createElement("h3");
            listItemTitle.textContent = listItem.getTitle();

            listItemDiv.appendChild(listItemTitle);
            listDiv.appendChild(listItemDiv);
            listItemDiv.classList.add("list-item-div");

            listItemDiv.addEventListener("mouseenter", function() {
                this.classList.remove("list-item-div");
                this.classList.add("hover");
            });
            listItemDiv.addEventListener("mouseleave", function() {
                this.classList.add("list-item-div");
                this.classList.remove("hover");
            });

            listItemDiv.addEventListener("click", function() {
                this.classList.toggle("list-item-selected");
            });
        }
    };

    const displayPopUp = () => {
        container.classList.toggle("dimmer");
        popUpForm.classList.toggle("disabled");
        taskTitile.focus();
    };


    return { displayTodoList, displayPopUp };
})();

export default todoView;