const todoListItemFactory = (title, description, dueDate, priority) => {
    const getTitle = () => { return title };
    const getDescription = () => { return description };
    const getdueDate = () => { return dueDate };
    const getpriority = () => { return priority };

    return { getTitle, getDescription, getdueDate, getpriority };
};

const todoModel = (() => {
    let todoList = [];

    const addTodoListItem = (title, description, dueDate, priority) => {
        todoList.push(todoListItemFactory(title, description, dueDate, priority));

    };

    const getTodoList = () => {
        return todoList;
    }

    const getTodoItem = (index) => {
        return todoList[index];
    }

    return { addTodoListItem, getTodoList, getTodoItem };
})();


export default todoModel;