const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteCheck);

function addtodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class = "fas fa-check">';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash">';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";

    
}
// function deleteCheck(e) {
//     const item = e.target;

    
//     if (item.classList === "complete-btn") {
//         const todo = item.parentElement;
//         todo.classList.toggle("completed");
//     }
// }



document.addEventListener("click", (e)=>{
    const item = e.target;
    const todo = e.target.closest(".todo")
    if(item.classList.contains("trash-btn")) {
        // const todo = item.parentElement;
        todo.remove();
    }
    if (item.classList.contains("complete-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
})