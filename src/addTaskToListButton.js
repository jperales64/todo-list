import todoItemFactory from "./todoItem";
import displayList from "./listDisplayer";
import clearListDiv from "./clearListDiv";
import addListenerToDeleteButtons from "./deleteListItem";



const addListnerToAddButton = (currentList) => {
    const addButton = document.querySelector('.add-button');

    addButton.addEventListener('click', () => {
        clearListDiv();
        currentList.push(todoItemFactory("Sweep kitchen", "With a BROOM", "tomorrow", "High"));
        displayList(currentList);
        addListenerToDeleteButtons(currentList);

    })
}

export default addListnerToAddButton;