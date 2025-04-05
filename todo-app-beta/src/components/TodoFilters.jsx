import React from 'react';

function TodoFilters({ filter, setFilter }) {
  return (
    <div className="btn-group mb-4 w-100">
      <button 
        className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setFilter('all')}
      >
        Todas
      </button>
      <button 
        className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setFilter('active')}
      >
        Pendientes
      </button>
      <button 
        className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setFilter('completed')}
      >
        Completadas
      </button>
    </div>
  );
}

export default TodoFilters;
