const todoView = (() => {
    const container = document.querySelector('.content');

    const displayTodoList = (todoList) => {
        for (let listItem of todoList) {
            const listItemDiv = document.createElement('div');
            const listItemTitle = document.createElement('h3');
            listItemTitle.textContent = listItem.getTitle();
            listItemDiv.appendChild(listItemTitle);
            container.appendChild(listItemDiv);
        }
    }

    return { displayTodoList };
})();


export default todoView;