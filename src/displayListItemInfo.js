const displayListItemInfo = (currentList) => {
    const listItemsDivs = document.querySelectorAll('.item-div');
    const listView = document.querySelector('.list-view')
    for (let listItem of listItemsDivs) {

        listItem.addEventListener("click", () => {
            if (document.querySelector('.list-info-div')) {
                listView.removeChild(document.querySelector('.list-info-div'));
            }

            const listInfoDiv = document.createElement('div');
            listInfoDiv.classList.add('list-info-div');
            const listInfoTitle = document.createElement('h3');
            if (currentList[listItem.getAttribute('index')]) {
                listInfoTitle.textContent = currentList[listItem.getAttribute('index')].title;
            }

            listInfoDiv.appendChild(listInfoTitle);

            listView.appendChild(listInfoDiv);
        })

    }
}

export default displayListItemInfo