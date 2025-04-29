import { useState } from 'react';
import { InputControl } from '../ui/InputControl';
import { SelectControl } from '../ui/SelectControl';

export function Sidebar({ onFilterChange, onReset }) {
  const [nombre, setNombre] = useState('');
  const [orden, setOrden] = useState('');

  const handleChangeNombre = (e) => {
    const value = e.target.value;
    setNombre(value);
    onFilterChange({ nombre: value, orden });
  };

  const handleChangeOrden = (e) => {
    const value = e.target.value;
    setOrden(value);
    onFilterChange({ nombre, orden: value });
  };

  const handleReset = () => {
    setNombre('');
    setOrden('');
    onReset();
  };

  return (
    <aside className="bg-white p-4 rounded shadow-md space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Filtrar</h2>
        <InputControl
          id="nombre"
          value={nombre}
          onChange={handleChangeNombre}
          placeholder="Buscar producto..."
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Ordenar por</h2>
        <SelectControl
          id="orden"
          value={orden}
          onChange={handleChangeOrden}
          options={[
            { valor: "cantidad", label: "Cantidad" },
            { valor: "codigo", label: "Código" },
            { valor: "creacion", label: "Fecha de creación" },
            { valor: "nombre", label: "Nombre" },
          ]}
        />
      </div>

      <div>
        <button
          type="button"
          onClick={handleReset}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded mt-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
        >
          Reiniciar Filtro
        </button>
      </div>
    </aside>
  );
}
