//======================FINAL CODE WITH SEARCH FUNCTIONALITY===================

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const todos = document.querySelector("#todos");
const searchInput = document.querySelector(".search-input");
const deleteAllBtn = document.getElementById("new-task-delete");

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
  updateLocalStorage();
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
  if (confirm("Are you sure you want to remove this item?")) {
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

function handleDeleteAllTodos() {
  if (confirm("Are you sure you want to remove all your todos?")) {
    while (todos.firstChild) {
      todos.removeChild(todos.firstChild);
    }
  }
}
// function handleDeleteAllTodos() {
//   while (todos.firstChild) {
//     todos.removeChild(todos.firstChild);
//   }
// }

deleteAllBtn.addEventListener("click", handleDeleteAllTodos);
