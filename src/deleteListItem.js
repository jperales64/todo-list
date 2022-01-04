import displayList from "./listDisplayer";
import clearListDiv from "./clearListDiv";
import displayListItemInfo from "./displayListItemInfo";

const addListenerToDeleteButtons = (currentList) => {
    const deleteButtons = document.querySelectorAll('.delete-button');

    for (let deleteButton of deleteButtons) {
        deleteButton.addEventListener('click', () => {
            deleteItem(currentList, deleteButton);

        })
    }
}

const deleteItem = (currentList, deleteButton) => {
    currentList.splice(deleteButton.parentElement.parentElement.getAttribute('index'), 1);
    clearListDiv();
    displayList(currentList);
    addListenerToDeleteButtons(currentList);
    displayListItemInfo(currentList);
}

export default addListenerToDeleteButtons