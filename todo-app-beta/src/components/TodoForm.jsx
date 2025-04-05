import React, { useState } from 'react';

function TodoForm({ addTodo, disabled }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="¿Qué necesitas hacer?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          disabled={disabled}
        />
        <button 
          className="btn btn-success" 
          type="submit"
          disabled={disabled || !newTodo.trim()}
        >
          <i className="bi bi-plus-lg"></i> Añadir
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
