// document.getElementById("add").onClick;

// docum
// ent.getElementById("add").addEventListener(Event, callback);
// document.getElementById("add").addEventListener('click', function() {

// });

// window.addEventLitener('load', functionName(){})

// User clicked on the add button
// if there is any text inside the item field, add that text to the todo list
// document.getElementById("add").addEventListener("click", function() {
//   let value = document.getElementById("item").value;
// });

/// let list = an array
let list = [];

// be able to explain this out
const addToList = () => {
  let newTask = document.getElementById("new-task");
  let todolist = document.getElementById("list");
  let item = document.createElement("li");

  // Add New Task text to Item ----------
  item.innerText = newTask.value;

  // Add Remove Functionality to item
  item.onclick = removeFromList.bind(this, list.length);

  // Add Item to List
  todolist.appendChild(item);
  list.push(newTask.value);

  // Reset the Text -------
  newTask.value = "";
};

const removeFromList = index => {
  let todoList = document.getElementById("list");
  console.log(index);
  list.splice(index, 1);

  todoList.innerHTML = "";
};
