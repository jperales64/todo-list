const addListnerToAddButton = () => {
    const addButton = document.querySelector('.add-button');
    const popUpForm = document.querySelector('.wrapper');

    addButton.addEventListener('click', () => {

        popUpForm.classList.toggle('disabled');
        popUpForm.classList.toggle('dimmer');

    })
};


export default addListnerToAddButton;