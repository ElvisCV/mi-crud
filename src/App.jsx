// Importamos React y dos hooks necesarios: useState y useEffect
import React, { useState, useEffect } from 'react';

// Importamos los componentes personalizados
import Form from './components/Form';
import List from './components/List';

// Importamos los estilos
import './App.css';

// Componente principal de la aplicación
function App() {
  // Estado que contiene la lista de ítems
  const [items, setItems] = useState([]);

  // Estado para saber si hay un ítem en modo edición
  const [itemToEdit, setItemToEdit] = useState(null);

  // useEffect que se ejecuta una sola vez al cargar la app
  // Carga los datos almacenados en localStorage (si los hay)
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // useEffect que se ejecuta cada vez que cambia "items"
  // Guarda automáticamente los datos actualizados en localStorage
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Función que agrega un nuevo ítem o actualiza uno existente
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      // Si hay un ítem en modo edición, lo actualizamos
      setItems(
        items.map((item) =>
          item.id === itemToEdit.id ? { ...item, value } : item
        )
      );
      setItemToEdit(null); // Salimos del modo edición
    } else {
      // Si no hay ítem para editar, agregamos uno nuevo
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  // Función que elimina un ítem por su ID
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Función que activa el modo edición, guardando el ítem seleccionado
  const editItem = (item) => {
    setItemToEdit(item);
  };

  // JSX que renderiza el componente
  return (
    <div className="App">
      {/* Título principal */}
      <h1>CRUD con LocalStorage</h1>

      {/* Componente de formulario: para agregar o editar ítems */}
      <Form 
        addOrUpdateItem={addOrUpdateItem} 
        itemToEdit={itemToEdit} 
      />

      {/* Componente de lista: muestra todos los ítems */}
      <List 
        items={items} 
        deleteItem={deleteItem} 
        editItem={editItem} 
      />
    </div>
  );
}

// Exportamos el componente para que se pueda usar en index.js
export default App;
