import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import { fetchTasks, createTask, updateTask, deleteTask } from './services/taskService';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorAlert from './components/ErrorAlert';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar tareas desde el backend al iniciar
  useEffect(() => {
    const loadTasks = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTasks();
        setTodos(data);
        setError(null);
      } catch (err) {
        setError('Error al cargar las tareas. Por favor, intenta de nuevo más tarde.');
        console.error('Error fetching tasks:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadTasks();
  }, []);

  // Añadir nueva tarea
  const addTodo = async (text) => {
    if (text.trim() === '') return;
    
    try {
      setIsLoading(true);
      const newTask = {
        text: text,
        completed: false
      };
      
      const createdTask = await createTask(newTask);
      setTodos([...todos, createdTask]);
      setError(null);
    } catch (err) {
      setError('Error al crear la tarea. Por favor, intenta de nuevo.');
      console.error('Error creating task:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Marcar tarea como completada/pendiente
  const toggleTodo = async (id) => {
    try {
      const todoToUpdate = todos.find(todo => todo.id === id);
      if (!todoToUpdate) return;

      const updatedTask = { 
        ...todoToUpdate, 
        completed: !todoToUpdate.completed 
      };
      
      setIsLoading(true);
      await updateTask(id, updatedTask);
      
      setTodos(
        todos.map(todo => 
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
      setError(null);
    } catch (err) {
      setError('Error al actualizar la tarea. Por favor, intenta de nuevo.');
      console.error('Error updating task:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Eliminar tarea
  const deleteTodo = async (id) => {
    try {
      setIsLoading(true);
      await deleteTask(id);
      setTodos(todos.filter(todo => todo.id !== id));
      setError(null);
    } catch (err) {
      setError('Error al eliminar la tarea. Por favor, intenta de nuevo.');
      console.error('Error deleting task:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Editar tarea
  const editTodo = async (id, newText) => {
    try {
      const todoToUpdate = todos.find(todo => todo.id === id);
      if (!todoToUpdate) return;
      
      const updatedTask = { 
        ...todoToUpdate, 
        text: newText 
      };
      
      setIsLoading(true);
      await updateTask(id, updatedTask);
      
      setTodos(
        todos.map(todo => 
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
      setError(null);
    } catch (err) {
      setError('Error al editar la tarea. Por favor, intenta de nuevo.');
      console.error('Error editing task:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Filtrar tareas según el estado seleccionado
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <TodoHeader />
            
            <div className="card-body">
              {error && <ErrorAlert message={error} onClose={() => setError(null)} />}
              
              <TodoForm addTodo={addTodo} disabled={isLoading} />
              <TodoFilters filter={filter} setFilter={setFilter} />
              
              {isLoading && <LoadingSpinner />}
              
              <TodoList 
                todos={filteredTodos} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
                editTodo={editTodo}
                isLoading={isLoading} 
              />
              
              {todos.length > 0 && (
                <div className="mt-3 text-muted">
                  <small>
                    {todos.filter(todo => !todo.completed).length} pendientes / {todos.length} total
                  </small>
                </div>
              )}
            </div>

            <TodoFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;