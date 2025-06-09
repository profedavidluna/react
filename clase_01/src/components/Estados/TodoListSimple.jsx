import React, { useState } from 'react';

function TodoListSimple() {
  // Estado para la nueva tarea que el usuario está escribiendo
  const [newTask, setNewTask] = useState('');
  // Estado para la lista de tareas. Cada tarea es un objeto { id, text, completed }
  const [todos, setTodos] = useState([]);

  // Maneja el cambio en el input de nueva tarea
  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  // Agrega una nueva tarea a la lista
  const handleAddTask = () => {
    if (newTask.trim() === '') return; // No agregar tareas vacías

    const newTodo = {
      id: Date.now(), // ID único para cada tarea
      text: newTask,
      completed: false,
    };

    // Actualiza la lista de todos añadiendo la nueva tarea
    // Siempre crea una nueva referencia al array para que React detecte el cambio
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setNewTask(''); // Limpia el input después de agregar
  };

  // Marca una tarea como completada/incompleta
  const handleToggleComplete = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '25px' }}>Lista de Tareas Simple</h3>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
          placeholder="Añadir nueva tarea..."
          style={{ flexGrow: 1, padding: '10px', fontSize: '1em', borderRadius: '5px', border: '1px solid #ddd', marginRight: '10px' }}
        />
        <button
          onClick={handleAddTask}
          style={{ padding: '10px 15px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Añadir
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777' }}>No hay tareas aún. ¡Añade una!</p>
        ) : (
          todos.map(todo => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
                padding: '10px',
                backgroundColor: todo.completed ? '#e0ffe0' : '#f9f9f9',
                borderRadius: '5px',
                border: `1px solid ${todo.completed ? '#c0f0c0' : '#eee'}`,
                cursor: 'pointer'
              }}
              onClick={() => handleToggleComplete(todo.id)}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)} // Evita que el clic en el checkbox propague al li
                style={{ marginRight: '10px' }}
              />
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#888' : '#333',
                  flexGrow: 1
                }}
              >
                {todo.text}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoListSimple;