import React from 'react'

/**
* @author
* @function Todo
**/

const Todo = (todo) => {
  function handleTodoClick() {
    todo.toggleTodo(todo.todo.id)
  }
  return(
      <div>
      <label>
        <input type="checkbox" checked={todo.todo.complete} onChange={handleTodoClick}/>
        {todo.todo.name}
      </label>
    </div>
   )

 }

export default Todo