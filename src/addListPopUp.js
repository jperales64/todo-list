const createListPopUp = () => {
    const container = document.querySelector(".content");

    //creates popup
    const popUpWrapper = document.querySelector('.wrapper');
    //popUpWrapper.classList.add('wrapper', "disabled");
    const popUpForm = document.createElement("div");
    popUpForm.classList.add("add-list-pop-up-form", "disabled");


    //task title
    const taskTitile = document.createElement("input");
    taskTitile.setAttribute("type", "text");
    taskTitile.classList.add("list-title");
    taskTitile.addEventListener("click", () => {
        taskTitile.select();
    });
    taskTitile.placeholder = "List Title";
    popUpForm.appendChild(taskTitile);


    //button
    const addTaskToListButton = document.createElement("button");
    addTaskToListButton.textContent = "Add List";
    addTaskToListButton.classList.add("add-list-to-list-button");
    popUpForm.appendChild(addTaskToListButton);

    popUpWrapper.appendChild(popUpForm);
    container.appendChild(popUpWrapper);

    popUpWrapper.addEventListener('click', (e) => {
        if (e.target !== popUpWrapper) {
            return;
        }
        popUpWrapper.classList.add('disabled');
        popUpForm.classList.add('disabled');
        document.querySelector(".list-title").value =
            document.querySelector(".list-title").defaultValue;

    })

}

export default createListPopUp;