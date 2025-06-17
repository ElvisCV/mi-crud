// Importamos React y dos hooks: useState para manejar el estado del input,
// y useEffect para reaccionar a cambios en las props.
import React, { useState, useEffect } from 'react';

// Componente funcional Form que recibe dos props:
// - addOrUpdateItem: función para agregar o actualizar un item
// - itemToEdit: item que se quiere editar (si existe)
function Form({ addOrUpdateItem, itemToEdit }) {
  // inputValue es el estado del valor del campo de texto
  // setInputValue es la función para actualizar ese valor
  const [inputValue, setInputValue] = useState('');

  // Este useEffect se ejecuta cada vez que itemToEdit cambia
  // Si hay un item para editar, llenamos el input con su valor
  // Si no hay item, limpiamos el campo
  useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value); // modo edición
    } else {
      setInputValue(''); // modo creación
    }
  }, [itemToEdit]); // Dependencia: se ejecuta cuando cambia itemToEdit

  // Esta función maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la página

    // Solo procede si el input no está vacío
    if (inputValue.trim()) {
      addOrUpdateItem(inputValue); // Llama a la función para agregar o actualizar
      setInputValue(''); // Limpia el campo de texto después de enviar
    }
  };

  // JSX que se renderiza en pantalla
  return (
    <form onSubmit={handleSubmit}>
      {/* Campo de texto controlado */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado al escribir
      />

      {/* Botón que cambia según si estamos editando o creando */}
      <button type="submit">
        {itemToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default Form;
