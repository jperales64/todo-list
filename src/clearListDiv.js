const clearListDiv = () => {
    const listDiv = document.querySelector('.list-view');

    listDiv.removeChild(listDiv.firstChild);
}

export default clearListDiv;