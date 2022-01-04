const addListnerToAddTaskButton = () => {
    const addTaskButton = document.querySelector('.add-button');
    const wrapper = document.querySelector('.wrapper');
    const popUpForm = document.querySelector('.pop-up-form');


    addTaskButton.addEventListener('click', () => {

        popUpForm.classList.remove('disabled');
        wrapper.classList.add('dimmer');
        wrapper.classList.remove('disabled');

    })
};

export default addListnerToAddTaskButton;