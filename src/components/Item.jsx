// Importamos React para poder usar JSX
import React from 'react';

// Componente funcional Item
// Recibe tres props:
// - item: el objeto que contiene la información del ítem actual
// - deleteItem: función para eliminar un ítem
// - editItem: función para editar un ítem
function Item({ item, deleteItem, editItem }) {
  return (
    // Cada ítem se muestra como un elemento de lista
    <li>
      {/* Mostramos el valor del ítem */}
      {item.value}

      {/* Botón para editar el ítem.
          Al hacer clic, se llama a editItem pasando el objeto completo */}
      <button onClick={() => editItem(item)}>Editar</button>

      {/* Botón para eliminar el ítem.
          Al hacer clic, se llama a deleteItem pasando solo el id del ítem */}
      <button onClick={() => deleteItem(item.id)}>Eliminar</button>
    </li>
  );
}

// Exportamos el componente para poder usarlo desde otro archivo
export default Item;
