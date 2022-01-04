const addListnerToAddListButton = () => {
    const addListButton = document.querySelector('.add-list-button');
    const wrapper = document.querySelector('.wrapper');
    const popUpForm = document.querySelector('.add-list-pop-up-form');


    addListButton.addEventListener('click', () => {

        popUpForm.classList.remove('disabled');
        wrapper.classList.add('dimmer');
        wrapper.classList.remove('disabled');

    })
};


export default addListnerToAddListButton;