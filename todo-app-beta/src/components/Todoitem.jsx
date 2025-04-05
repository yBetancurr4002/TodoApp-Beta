import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo, isLoading }) {
  const handleEdit = () => {
    const newText = prompt('Editar tarea:', todo.text);
    if (newText !== null && newText.trim() !== '') {
      editTodo(todo.id, newText);
    }
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'bg-light' : ''}`}>
      <div className="form-check d-flex align-items-center">
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          id={`todo-${todo.id}`}
          disabled={isLoading}
        />
        <label 
          className={`form-check-label ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
          htmlFor={`todo-${todo.id}`}
        >
          {todo.text}
        </label>
      </div>
      <div>
        <button 
          className="btn btn-sm btn-outline-primary me-1"
          onClick={handleEdit}
          disabled={isLoading}
        >
          <i className="bi bi-pencil"></i>
        </button>
        <button 
          className="btn btn-sm btn-outline-danger"
          onClick={() => deleteTodo(todo.id)}
          disabled={isLoading}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
