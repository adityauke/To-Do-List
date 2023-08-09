// let newToDo = document.getElementById('newtodo');
// let newToDoDesc = document.getElementById('newtodoDesc');
// let addToDo = document.getElementById('addtodo');
// let listToDo = document.getElementById('todoList');

// addToDo.addEventListener("click", () => {
//     const newToDoText = newToDo.value;

//     if (newToDoText !== "") {
//         const newToDoItem = document.createElement('li');
//         newToDoItem.innerText = newToDoText;
        
//         const deleteToDo = document.createElement('button');
//         deleteToDo.innerText = "X";
//         deleteToDo.classList.add("delete-todo-btn");
        
//         deleteToDo.addEventListener("click", function () {
//             newToDoItem.remove();
//         });
        
//         newToDoItem.appendChild(deleteToDo);
//         listToDo.appendChild(newToDoItem);
//         newToDo.value = ""; 
//     }
// });
// let newtodoTitle = document.getElementById('newtodo');
// let newtodoDesc = document.getElementById('newtodoDesc');
// let addToDo = document.getElementById('addtodo');
// let listToDo = document.getElementById('todoList');

// addToDo.addEventListener("click", () => {
//     const newToDoText = newtodoTitle.value;
//     const newToDoDesc = newtodoDesc.value;

//     if (newToDoText && newToDoDesc) {
//         const newToDoItem = document.createElement('div');
//         newToDoItem.classList.add("todo-item");

//         const titleElement = document.createElement('h3');
//         titleElement.innerText = newToDoText;

//         const descElement = document.createElement('p');
//         descElement.innerText = newToDoDesc;

//         const deleteToDo = document.createElement('button');
//         deleteToDo.innerText = "X";
//         deleteToDo.classList.add("delete-todo-btn");
//         deleteToDo.addEventListener("click", function () {
//             newToDoItem.remove();
//         });

//         newToDoItem.appendChild(titleElement);
//         newToDoItem.appendChild(descElement);
//         newToDoItem.appendChild(deleteToDo);

//         listToDo.appendChild(newToDoItem);

//         // Clear input fields
//         newtodoTitle.value = "";
//         newtodoDesc.value = "";
//     }
// });

let newtodoTitle = document.getElementById('newtodo');
let newtodoDesc = document.getElementById('newtodoDesc');
let addToDo = document.getElementById('addtodo');
let listToDo = document.getElementById('todoList');
let resetToDos = document.getElementById('resetTodo'); 

window.addEventListener("load", () => {
    const savedToDoList = JSON.parse(localStorage.getItem('todoList')) || [];
    
    savedToDoList.forEach(item => {
        createToDoItem(item.title, item.description);
    });
});

addToDo.addEventListener("click", () => {
    const newToDoText = newtodoTitle.value;
    const newToDoDesc = newtodoDesc.value;

    if (newToDoText && newToDoDesc) {
        createToDoItem(newToDoText, newToDoDesc);
        saveToLocalStorage(newToDoText, newToDoDesc);

        newtodoTitle.value = "";
        newtodoDesc.value = "";
    }
});

function createToDoItem(title, description) {
    const newToDoItem = document.createElement('div');
    newToDoItem.classList.add("todo-item");

    const titleElement = document.createElement('h3');
    titleElement.innerText = title;

    const descElement = document.createElement('p');
    descElement.innerText = description;

    const deleteToDo = document.createElement('button');
    deleteToDo.innerText = "X";
    deleteToDo.classList.add("delete-todo-btn");
    deleteToDo.addEventListener("click", function () {
        newToDoItem.remove();
        removeFromLocalStorage(title, description);
    });

    newToDoItem.appendChild(titleElement);
    newToDoItem.appendChild(descElement);
    newToDoItem.appendChild(deleteToDo);

    listToDo.appendChild(newToDoItem);
}

resetToDos.addEventListener("click", () => {
    listToDo.innerHTML = "";
    localStorage.removeItem('todoList'); 
});

function saveToLocalStorage(title, description) {
    const savedToDoList = JSON.parse(localStorage.getItem('todoList')) || [];
    savedToDoList.push({ title, description });
    localStorage.setItem('todoList', JSON.stringify(savedToDoList));
}

function removeFromLocalStorage(title, description) {
    const savedToDoList = JSON.parse(localStorage.getItem('todoList')) || [];
    const updatedToDoList = savedToDoList.filter(item => item.title !== title || item.description !== description);
    localStorage.setItem('todoList', JSON.stringify(updatedToDoList));
}
