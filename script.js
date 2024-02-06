
function createTodo() {
    const userInput = document.getElementById("note");
    if(userInput.value != "") {
        const listItem = document.createElement("li");
        const todoContainerElement = document.getElementById("todos-container");
        todoContainerElement.appendChild(listItem);
        listItem.innerHTML = userInput.value;
        listItem.setAttribute("onclick", "todoCheck(event, this)");
        document.getElementById("note").value = "";
        userInput.placeholder = "Add another item.";
    }
    else {
        userInput.placeholder = "You have not written anything. Please, write here!";
    }
}


function deleteTodos() {
    document.getElementById("todos-container").innerHTML = "";
    document.getElementById("note").placeholder = "Add something...";
}


function todoCheck(e, todo) {
    if(todo.style.textDecoration == "") {
        todo.style.textDecoration = "line-through";
    }
    else {
        todo.style.textDecoration = "";
    }
}
