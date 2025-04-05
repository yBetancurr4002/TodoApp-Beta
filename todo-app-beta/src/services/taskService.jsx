const API_URL = 'http://localhost:8080/api/tasks';

// Obtener todas las tareas
export const fetchTasks = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};

// Crear una nueva tarea
export const createTask = async (task) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};

// Actualizar una tarea existente
export const updateTask = async (id, task) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};

// Eliminar una tarea
export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return true;
};