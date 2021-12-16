const todoView = (() => {
    const container = document.querySelector('.content');

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-div');

    const listDiv = document.createElement('div');
    listDiv.classList.add('list-div');

    mainDiv.appendChild(listDiv);
    container.appendChild(mainDiv);


    const displayTodoList = (todoList) => {
        for (let listItem of todoList) {
            const listItemDiv = document.createElement('div');
            const listItemTitle = document.createElement('h3');
            listItemTitle.textContent = listItem.getTitle();
            listItemDiv.appendChild(listItemTitle);
            listDiv.appendChild(listItemDiv);
        }
    }

    return { displayTodoList };
})();


export default todoView;