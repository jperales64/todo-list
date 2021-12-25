const displayWebPage = () => {

    const content = document.querySelector('.content');
    content.appendChild(createHeader());

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-div');

    const toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');

    const addButton = document.createElement('button');
    addButton.textContent = "Add Task";
    addButton.classList.add('add-button');

    toolbar.appendChild(addButton);

    const listViewDiv = document.createElement('div');
    listViewDiv.classList.add('list-view');

    mainDiv.appendChild(toolbar);
    mainDiv.appendChild(listViewDiv);

    content.appendChild(mainDiv);

};

const createHeader = () => {
    const header = document.createElement('header');
    const webPageHeaderTitle = document.createElement('h1');
    webPageHeaderTitle.textContent = "To Do List";
    header.appendChild(webPageHeaderTitle);

    return header;
}

export default displayWebPage;