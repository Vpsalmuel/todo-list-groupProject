// const form = document.querySelector("#new-task-form");
// const input = document.querySelector("#new-task-input");
// const todos = document.querySelector("#todos");
// const searchInput = document.querySelector(".search-input");

// //Listening to events on the form
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const todo = input.value;
//     console.log(todo);

//     if (!todo) {
//         alert("please add a todo");
//         return;
//     }
//     //Creating the parent container
//     const todoEl = document.createElement("div");
//     todoEl.classList.add("task");

//     const todoContent = document.createElement("div");
//     todoContent.classList.add("content");
//     todoContent.innerHTML = `<input type="text" class = "text" value="${todo}" readonly>`;

//     todoEl.appendChild(todoContent);

//     const todoActions = document.createElement("div");
//     todoActions.classList.add("actions");
//     //Creating the edit button
//     const editTodo = document.createElement("button");
//     editTodo.classList.add("edit");
//     editTodo.innerHTML = "Edit";
//     //creating the delete button
//     const deleteTodo = document.createElement("button");
//     deleteTodo.classList.add("delete");
//     deleteTodo.innerHTML = "Delete";

//     todoActions.append(editTodo, deleteTodo);
//     //todoActions.appendChild(deleteTodo);

//     todoEl.appendChild(todoActions);

//     todos.appendChild(todoEl);

//     input.value = "";
//     //Handling the edit functions

//     editTodo.addEventListener("click", () => {
//         const input = todoContent.querySelector("input");
//         if (editTodo.innerText.toLowerCase() == "edit") {
//             input.removeAttribute("readonly");
//             input.focus();
//             editTodo.innerText = "Save";
//         } else {
//             input.setAttribute("readonly", "readonly");
//             editTodo.innerText = "Edit";
//         }
//     });
//     deleteTodo.addEventListener("click", () => {
//         if (confirm("Are you sure you want to remove this?")) {
//             todos.removeChild(todoEl);
//         }
//     });
// });

//=====================REFACTORED CODE===============================
// const form = document.querySelector("#new-task-form");
// const input = document.querySelector("#new-task-input");
// const todos = document.querySelector("#todos");
// const searchInput = document.querySelector(".search-input");

// form.addEventListener("submit", handleFormSubmit);

// function handleFormSubmit(e) {
//     e.preventDefault();

//     const todo = input.value;
//     console.log(todo);

//     if (!todo) {
//         alert("Please add a todo");
//         return;
//     }

//     const todoEl = createTodoElement(todo);
//     todos.appendChild(todoEl);

//     input.value = "";
// }

// function createTodoElement(todo) {
//     const todoEl = document.createElement("div");
//     todoEl.classList.add("task");

//     const todoContent = createTodoContent(todo);
//     todoEl.appendChild(todoContent);

//     const todoActions = createTodoActions();
//     todoEl.appendChild(todoActions);

//     return todoEl;
// }

// function createTodoContent(todo) {
//     const todoContent = document.createElement("div");
//     todoContent.classList.add("content");
//     todoContent.innerHTML = `<input type="text" class="text" value="${todo}" readonly>`;

//     return todoContent;
// }

// function createTodoActions() {
//     const todoActions = document.createElement("div");
//     todoActions.classList.add("actions");

//     const editTodo = createEditButton();
//     const deleteTodo = createDeleteButton();

//     todoActions.append(editTodo, deleteTodo);

//     return todoActions;
// }

// function createEditButton() {
//     const editTodo = document.createElement("button");
//     editTodo.classList.add("edit");
//     editTodo.innerHTML = "Edit";

//     editTodo.addEventListener("click", handleEditClick);

//     return editTodo;
// }

// function handleEditClick() {
//     const input = this.parentNode.previousElementSibling.querySelector("input");

//     if (this.innerText.toLowerCase() === "edit") {
//         input.removeAttribute("readonly");
//         input.focus();
//         this.innerText = "Save";
//     } else {
//         input.setAttribute("readonly", "readonly");
//         this.innerText = "Edit";
//     }
// }

// function createDeleteButton() {
//     const deleteTodo = document.createElement("button");
//     deleteTodo.classList.add("delete");
//     deleteTodo.innerHTML = "Delete";

//     deleteTodo.addEventListener("click", handleDeleteClick);

//     return deleteTodo;
// }

// function handleDeleteClick() {
//     if (confirm("Are you sure you want to remove this?")) {
//         const todoEl = this.parentNode.parentNode;
//         todos.removeChild(todoEl);
//     }
// }
//======================SEARCH FUNCTIONALITY===================

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const todos = document.querySelector("#todos");
const searchInput = document.querySelector(".search-input");

form.addEventListener("submit", handleFormSubmit);
searchInput.addEventListener("input", handleSearchInput);

function handleFormSubmit(e) {
    e.preventDefault();

    const todo = input.value.trim();

    if (!todo) {
        alert("Please add a todo");
        return;
    }

    const todoEl = createTodoElement(todo);
    todos.appendChild(todoEl);

    input.value = "";
}

function createTodoElement(todo) {
    const todoEl = document.createElement("div");
    todoEl.classList.add("task");

    const todoContent = createTodoContent(todo);
    todoEl.appendChild(todoContent);

    const todoActions = createTodoActions();
    todoEl.appendChild(todoActions);

    return todoEl;
}

function createTodoContent(todo) {
    const todoContent = document.createElement("div");
    todoContent.classList.add("content");
    todoContent.innerHTML = `<input type="text" class="text" value="${todo}" readonly>`;

    return todoContent;
}

function createTodoActions() {
    const todoActions = document.createElement("div");
    todoActions.classList.add("actions");

    const editTodo = createEditButton();
    const deleteTodo = createDeleteButton();

    todoActions.append(editTodo, deleteTodo);

    return todoActions;
}

function createEditButton() {
    const editTodo = document.createElement("button");
    editTodo.classList.add("edit");
    editTodo.innerHTML = "Edit";

    editTodo.addEventListener("click", handleEditClick);

    return editTodo;
}

function handleEditClick() {
    const input = this.parentNode.previousElementSibling.querySelector("input");
    console.log(input);

    if (this.innerText.toLowerCase() === "edit") {
        // console.log(this);
        input.removeAttribute("readonly");
        input.focus();
        this.innerText = "Save";
    } else {
        input.setAttribute("readonly", "readonly");
        this.innerText = "Edit";
    }
}

function createDeleteButton() {
    const deleteTodo = document.createElement("button");
    deleteTodo.classList.add("delete");
    deleteTodo.innerHTML = "Delete";

    deleteTodo.addEventListener("click", handleDeleteClick);

    return deleteTodo;
}

function handleDeleteClick() {
    if (confirm("Are you sure you want to remove this?")) {
        const todoEl = this.parentNode.parentNode;
        todos.removeChild(todoEl);
    }
}

function handleSearchInput() {
    const searchValue = searchInput.value.trim().toLowerCase();
    const todoElements = todos.getElementsByClassName("task");

    Array.from(todoElements).forEach((todoEl) => {
        const todoText = todoEl.querySelector(".text").value.toLowerCase();
        if (todoText.includes(searchValue)) {
            todoEl.style.display = "flex";
        } else {
            todoEl.style.display = "none";
        }
    });
}

//==============LOCAL STORAGE ====================

// const form = document.querySelector("#new-task-form");
// const input = document.querySelector("#new-task-input");
// const todos = document.querySelector("#todos");
// const searchInput = document.querySelector(".search-input");

// form.addEventListener("submit", handleFormSubmit);
// searchInput.addEventListener("input", handleSearchInput);
// todos.addEventListener("click", handleTodoClick);

// function getSavedTodos() {
//     const savedTodos = localStorage.getItem("todos");
//     return savedTodos ? JSON.parse(savedTodos) : [];
// }

// function loadTodosFromLocalStorage() {
//     const savedTodos = getSavedTodos();

//     if (savedTodos.length > 0) {
//         savedTodos.forEach((todo) => {
//             const todoEl = createTodoElement(todo);
//             todos.appendChild(todoEl);
//         });
//     }
// }

// // Load todos from local storage on page load
// window.addEventListener("load", loadTodosFromLocalStorage);

// function handleFormSubmit(e) {
//     e.preventDefault();

//     const todo = input.value.trim();

//     if (!todo) {
//         alert("Please add a todo");
//         return;
//     }

//     const todoEl = createTodoElement(todo);
//     todos.appendChild(todoEl);

//     saveTodoToLocalStorage(todo);

//     input.value = "";
// }

// function createTodoElement(todo) {
//     const todoEl = document.createElement("div");
//     todoEl.classList.add("task");

//     const todoContent = createTodoContent(todo);
//     todoEl.appendChild(todoContent);

//     const todoActions = createTodoActions();
//     todoEl.appendChild(todoActions);

//     return todoEl;
// }

// function createTodoContent(todo) {
//     const todoContent = document.createElement("div");
//     todoContent.classList.add("content");
//     todoContent.innerHTML = `<input type="text" class="text" value="${todo}" readonly>`;

//     return todoContent;
// }

// function createTodoActions() {
//     const todoActions = document.createElement("div");
//     todoActions.classList.add("actions");

//     const editTodo = createEditButton();
//     const deleteTodo = createDeleteButton();

//     todoActions.append(editTodo, deleteTodo);

//     return todoActions;
// }

// function createEditButton() {
//     const editTodo = document.createElement("button");
//     editTodo.classList.add("edit");
//     editTodo.innerHTML = "Edit";

//     return editTodo;
// }

// function createDeleteButton() {
//     const deleteTodo = document.createElement("button");
//     deleteTodo.classList.add("delete");
//     deleteTodo.innerHTML = "Delete";

//     return deleteTodo;
// }

// function handleTodoClick(e) {
//     if (e.target.classList.contains("edit")) {
//         handleEditClick(e.target);
//     } else if (e.target.classList.contains("delete")) {
//         handleDeleteClick(e.target);
//     }
// }

// function handleEditClick(editButton) {
//     const todoEl = editButton.parentNode.parentNode;
//     const input = todoEl.querySelector(".text");

//     if (editButton.innerText.toLowerCase() === "edit") {
//         input.removeAttribute("readonly");
//         input.focus();
//         editButton.innerText = "Save";
//     } else {
//         input.setAttribute("readonly", "readonly");
//         editButton.innerText = "Edit";
//     }

//     updateTodoInLocalStorage(todoEl);
// }

// function handleDeleteClick(deleteButton) {
//     const todoEl = deleteButton.parentNode.parentNode;
//     if (confirm("Are you sure you want to remove this?")) {
//         todos.removeChild(todoEl);
//         removeTodoFromLocalStorage(todoEl);
//     }
// }

// function handleSearchInput() {
//     const searchValue = searchInput.value.trim().toLowerCase();
//     const todoElements = todos.getElementsByClassName("task");

//     Array.from(todoElements).forEach((todoEl) => {
//         const todoText = todoEl.querySelector(".text").value.toLowerCase();
//         if (todoText.includes(searchValue)) {
//             todoEl.style.display = "block";
//         } else {
//             todoEl.style.display = "none";
//         }
//     });
// }

// function saveTodoToLocalStorage(todo) {
//     const savedTodos = getSavedTodos();
//     savedTodos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(savedTodos));
// }

// function getSavedTodos() {
//     const savedTodos = localStorage.getItem("todos");
//     return savedTodos ? JSON.parse(savedTodos) : [];
// }

// function updateTodoInLocalStorage(todoEl) {
//     const savedTodos = getSavedTodos();
//     const todoText = todoEl.querySelector(".text").value;
//     const index = savedTodos.indexOf(todoText);
//     if (index !== -1) {
//         savedTodos[index] = todoText;
//         localStorage.setItem("todos", JSON.stringify(savedTodos));
//     }
// }

// function removeTodoFromLocalStorage(todoEl) {
//     const savedTodos = getSavedTodos();
//     const todoText = todoEl.querySelector(".text").value;
//     const index = savedTodos.indexOf(todoText);
//     if (index !== -1) {
//         savedTodos.splice(index, 1);
//         localStorage.setItem("todos", JSON.stringify(savedTodos));
//     }
// }