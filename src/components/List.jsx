import React from 'react';
import Item from './Item';

// Lista de alumnos con acciones de editar y eliminar
function List({ items, deleteItem, editItem }) {
  if (items.length === 0) {
    return <p>No hay alumnos registrados.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </ul>
  );
}

export default List;
