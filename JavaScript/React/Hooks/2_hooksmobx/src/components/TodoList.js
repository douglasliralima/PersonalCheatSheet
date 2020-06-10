import React from 'react'

function TodoList({ todos, toggleTodo }) {
  return (
    <ul
      data-testid="todoList"
    >
      {todos &&
        todos.map((todo, index) => (
          <li
            onClick={() => toggleTodo(index)}
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
    </ul>
  )
}

export default TodoList
