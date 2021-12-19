const todoView = (() => {
    const container = document.querySelector(".content");

    const toolBar = document.createElement("div");
    toolBar.classList.add("tool-bar");

    const addButton = document.createElement("button");
    addButton.classList.add("add-button");
    addButton.textContent = "Create a Task";
    toolBar.appendChild(addButton);

    const toolBar1 = document.createElement("div");
    toolBar1.classList.add("tool-bar");

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main-div");

    const listDiv = document.createElement("div");
    listDiv.classList.add("list-div");

    mainDiv.appendChild(listDiv);
    container.appendChild(toolBar);
    container.appendChild(mainDiv);

    const displayTodoList = (todoList) => {
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

    return { displayTodoList };
})();

export default todoView;