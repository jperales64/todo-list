const displayListArray = (list) => {
    //displays list

    const content = document.querySelector(".list-array-div");
    let count = 0;
    for (let listItem of list) {
        const test = document.createElement('div');
        test.classList.add('list-array-item');
        test.setAttribute("index", count);
        test.textContent = listItem.name;
        content.appendChild(test);
        listItem.index = count;
        count++;
    }


};





export default displayListArray;