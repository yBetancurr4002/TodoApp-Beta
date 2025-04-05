import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo, editTodo, isLoading }) {
  if (todos.length === 0 && !isLoading) {
    return (
      <ul className="list-group">
        <li className="list-group-item text-center text-muted">
          No hay tareas para mostrar
        </li>
      </ul>
    );
  }

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          isLoading={isLoading}
        />
      ))}
    </ul>
  );
}

export default TodoList;
