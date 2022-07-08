let toDoArray = [];

export const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    toDoArray.push({Title, Description, DueDate, Priority, CheckList});
    return {Title, Description, DueDate, Priority, CheckList};
}