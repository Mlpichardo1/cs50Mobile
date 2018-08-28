const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('addTodoTextInput')
var itemCountSpan = document.getElementById('item-count').innerHTML
var uncheckedCountSpan = document.getElementById('unchecked-count').innerHTML


function newTodo() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("addTodoTextInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todo-list").appendChild(li);

  }
  document.getElementById("addTodoTextInput").value = "";

}

