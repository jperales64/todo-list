const displayWebPage = () => {

    const content = document.querySelector('.content');
    content.append(createHeader());

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-div');

    const toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');

    const addButton = document.createElement('button');
    addButton.textContent = "Add Task";
    addButton.classList.add('add-button');

    const listArrayDivContainer = document.createElement('div');
    listArrayDivContainer.classList.add('list-array-div-container');

    const listLabel = document.createElement('div');
    listLabel.textContent = 'Lists';
    listLabel.classList.add('list-label');



    listLabel.addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });



    const listArrayDiv = document.createElement('div');
    listArrayDiv.classList.add('list-array-div');

    listArrayDivContainer.appendChild(listLabel);
    listArrayDivContainer.appendChild(listArrayDiv);

    toolbar.appendChild(addButton);
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