import { format } from 'date-fns'

const createTaskPopUp = () => {
    const container = document.querySelector(".content");

    //creates popup
    const popUpWrapper = document.createElement('div');
    popUpWrapper.classList.add('wrapper', "disabled");
    const popUpForm = document.createElement("div");
    popUpForm.classList.add("pop-up-form");


    //task title
    const taskTitile = document.createElement("input");
    taskTitile.setAttribute("type", "text");
    taskTitile.classList.add("task-title");
    taskTitile.addEventListener("click", () => {
        taskTitile.select();
    });
    taskTitile.placeholder = "Task Title";
    popUpForm.appendChild(taskTitile);

    //task description
    const taskDescription = document.createElement("input");
    taskDescription.setAttribute("type", "text");
    taskDescription.classList.add("task-description");
    taskDescription.placeholder = "Task Description";
    popUpForm.appendChild(taskDescription);

    //task date
    const taskDate = document.createElement("input");
    taskDate.setAttribute("type", "date");
    taskDate.setAttribute("value", format(new Date(), 'yyyy-MM-dd'));
    taskDate.setAttribute("min", format(new Date(), 'yyyy-MM-dd'));
    taskDate.classList.add("task-date");
    taskDate.placeholder = "Task Date";
    popUpForm.appendChild(taskDate);

    //task priority
    const taskPriority = document.createElement("input");
    taskPriority.setAttribute("type", "text");
    taskPriority.classList.add("task-priority");
    taskPriority.placeholder = "Task Priority";
    popUpForm.appendChild(taskPriority);

    //button
    const addTaskToListButton = document.createElement("button");
    addTaskToListButton.textContent = "Add Task";
    addTaskToListButton.classList.add("add-task-to-list-button");
    popUpForm.appendChild(addTaskToListButton);

    popUpWrapper.appendChild(popUpForm);
    container.appendChild(popUpWrapper);

}

export default createTaskPopUp;