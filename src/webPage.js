const displayWebPage = () => {

    const content = document.querySelector('.content');
    //content.append(createHeader());

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-div');

    const toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = "Create a new task";
    addTaskButton.classList.add('add-button');
    addTaskButton.classList.add('fas');
    addTaskButton.classList.add('fa-plus');

    const addListButton = document.createElement('button');
    addListButton.textContent = "Create a new list";
    addListButton.classList.add('add-list-button');
    addListButton.classList.add('fas');
    addListButton.classList.add('fa-plus');

    const listArrayDivContainer = document.createElement('div');
    listArrayDivContainer.classList.add('list-array-div-container');

    const listLabel = document.createElement('div');
    const listLabelIcon = document.createElement('div');
    listLabel.textContent = 'Lists';
    listLabel.classList.add('list-label');
    listLabelIcon.classList.add('fas');
    listLabelIcon.classList.add('fa-chevron-down');
    listLabelIcon.classList.add('list-label-icon');
    listLabel.appendChild(listLabelIcon);

    const listArrayDiv = document.createElement('div');
    listArrayDiv.classList.add('list-array-div');

    listLabelIcon.addEventListener("click", function() {
        listLabelIcon.classList.toggle("list-label-icon-rotate");
        const content = document.querySelector('.list-array-div');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });

    listArrayDivContainer.appendChild(listLabel);
    listArrayDivContainer.appendChild(listArrayDiv);

    toolbar.appendChild(addTaskButton);
    toolbar.appendChild(addListButton);
    toolbar.appendChild(listArrayDivContainer);

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