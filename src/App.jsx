import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  // Cargar datos desde localStorage al iniciar
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // Guardar datos automáticamente cuando cambian
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Agregar o actualizar un alumno
  const addOrUpdateItem = (alumno) => {
    if (itemToEdit) {
      // Actualizar alumno existente
      setItems(items.map(item => item.id === alumno.id ? alumno : item));
      setItemToEdit(null);
    } else {
      // Agregar nuevo alumno
      setItems([...items, alumno]);
    }
  };

  // Eliminar un alumno por ID
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Activar modo edición
  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App">
      <h1>Aplicación de Evaluación de Alumnos</h1>
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      <h2>Lista de Alumnos</h2>
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;
