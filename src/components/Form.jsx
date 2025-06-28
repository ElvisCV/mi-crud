import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    asignatura: '',
    promedio: ''
  });

  // Cargar datos en modo edición
  useEffect(() => {
    if (itemToEdit) {
      setFormData(itemToEdit);
    } else {
      setFormData({ nombre: '', asignatura: '', promedio: '' });
    }
  }, [itemToEdit]);

  // Calcular escala de apreciación según promedio
  const calcularEscala = (promedio) => {
    const p = parseFloat(promedio);
    if (p >= 6.5 && p <= 7.0) return 'Destacado';
    if (p >= 5.6 && p <= 6.4) return 'Buen trabajo';
    if (p >= 4.0 && p <= 5.5) return 'Con mejora';
    if (p < 4.0) return 'Deficiente';
    return '';
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, asignatura, promedio } = formData;

    if (!nombre.trim() || !asignatura.trim() || !promedio.trim()) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    if (isNaN(promedio) || promedio < 1 || promedio > 7) {
      alert('El promedio debe ser un número entre 1.0 y 7.0');
      return;
    }

    const escala = calcularEscala(promedio);

    const alumno = {
      ...formData,
      promedio: parseFloat(promedio),
      escala,
      id: itemToEdit ? itemToEdit.id : Date.now()
    };

    addOrUpdateItem(alumno);
    setFormData({ nombre: '', asignatura: '', promedio: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{itemToEdit ? 'Editar Alumno' : 'Agregar Alumno'}</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre del alumno"
        value={formData.nombre}
        onChange={handleChange}
      />

      <input
        type="text"
        name="asignatura"
        placeholder="Asignatura"
        value={formData.asignatura}
        onChange={handleChange}
      />

      <input
        type="number"
        step="0.1"
        name="promedio"
        placeholder="Promedio (1.0 a 7.0)"
        value={formData.promedio}
        onChange={handleChange}
      />

      {formData.promedio && !isNaN(formData.promedio) && (
        <p>Escala: <strong>{calcularEscala(formData.promedio)}</strong></p>
      )}

      <button type="submit">
        {itemToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}

export default Form;
