import { format, parseISO } from 'date-fns'

//displays list
const displayList = (list) => {
    const content = document.querySelector(".list-view");
    const listDiv = createListDiv();
    let count = 0;
    for (let listItem of list) {
        const test = createItemDiv(listItem);
        test.setAttribute("index", count);
        listDiv.appendChild(test);
        listItem.index = count;
        count++;
    }

    content.insertBefore(listDiv, content.firstChild);
};

//creats div that holds all list items
const createListDiv = () => {
    const listDiv = document.createElement("div");
    listDiv.classList.add("list-div");

    return listDiv;
};

//creates div that holds a todo item
const createDiv = () => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item-div");

    return itemDiv;
};

//place content in todo item div
const createItemDiv = (listItem) => {
    const itemDiv = createDiv();
    itemDiv.appendChild(createItemDivTopRow(listItem));
    itemDiv.appendChild(createItemDescription(listItem));

    return itemDiv;
};

//creates top-row of todolistItem
const createItemDivTopRow = (listItem) => {
    const itemDivTopRow = createItemDivTopRowDiv();

    itemDivTopRow.appendChild(createCheckbox());
    itemDivTopRow.appendChild(createItemTitle(listItem));
    itemDivTopRow.appendChild(createDeleteButton());

    return itemDivTopRow;
};

//creates div to hold top row elements
const createItemDivTopRowDiv = () => {
    const itemDivTopRow = document.createElement('div');
    itemDivTopRow.classList.add('item-div-top-row');

    return itemDivTopRow;
}

//creates checkbox for todo item
const createCheckbox = () => {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkbox");

    return checkbox;
};

//creates title for todo item
const createItemTitle = (listItem) => {
    const itemTitle = document.createElement("h3");
    itemTitle.textContent = listItem.title;
    itemTitle.classList.add("item-title");

    return itemTitle;
};

//creates description for todo item
const createItemDescription = (listItem) => {
    const itemDescription = document.createElement("p");
    let date = parseISO(listItem.dueDate);
    date = format(date, "MM/dd");
    itemDescription.textContent = date;
    itemDescription.classList.add("item-description");

    return itemDescription;
};

//creates deletebutton for todo item
const createDeleteButton = () => {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    // deleteButton.textContent = "Delete";
    deleteButton.classList.add('fas');
    deleteButton.classList.add('fa-trash-alt');
    deleteButton.classList.add('fa-lg');


    return deleteButton;
};

export default displayList;