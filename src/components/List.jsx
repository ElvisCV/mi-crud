// Importamos React para usar JSX
import React from 'react';

// Importamos el componente Item, que usaremos para mostrar cada elemento de la lista
import Item from './Item';

// Componente funcional List
// Recibe tres props:
// - items: array de objetos que representan los ítems a mostrar
// - deleteItem: función para eliminar un ítem
// - editItem: función para editar un ítem
function List({ items, deleteItem, editItem }) {
  return (
    // Mostramos una lista sin ordenar
    <ul>
      {/* Recorremos el array de ítems con map */}
      {items.map((item) => (
        // Por cada ítem, renderizamos el componente <Item />
        <Item
          key={item.id}          // Clave única para ayudar a React a identificar los elementos
          item={item}            // Pasamos el objeto item completo como prop
          deleteItem={deleteItem} // Pasamos la función para eliminar
          editItem={editItem}     // Pasamos la función para editar
        />
      ))}
    </ul>
  );
}

// Exportamos el componente para que pueda usarse en App u otros componentes
export default List;
