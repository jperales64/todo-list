const displayList = (list) => {

    const content = document.querySelector('.content');
    for (let listItem of list) {

        content.appendChild(createItemDiv(listItem));
    }

};

const createItemDiv = (listItem) => {
    const itemDiv = createDiv();

    const itemTitle = document.createElement('h3');
    itemTitle.textContent = listItem.title;

    itemDiv.appendChild(itemTitle);

    return itemDiv;
};

const createDiv = () => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-div');

    return itemDiv;
};

export default displayList;