import React from 'react';

// Componente funcional para representar un alumno
function Item({ item, deleteItem, editItem }) {
  return (
    <li style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
      <p><strong>Nombre:</strong> {item.nombre}</p>
      <p><strong>Asignatura:</strong> {item.asignatura}</p>
      <p><strong>Promedio:</strong> {item.promedio}</p>
      <p><strong>Escala de Apreciación:</strong> {item.escala}</p>

      <button onClick={() => editItem(item)} style={{ marginRight: '10px' }}>
        Editar
      </button>
      <button onClick={() => deleteItem(item.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default Item;
