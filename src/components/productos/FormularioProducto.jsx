import { useState } from 'react';
import { useProductoStore } from '../../store/productoStore';
import { toast } from 'react-hot-toast';

export function FormularioProducto() {
  const crearProducto = useProductoStore((state) => state.crearProducto);

  const [formulario, setFormulario] = useState({
    nombre: '',
    descripcion: '',
    cantidad: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formulario.nombre.trim() || !formulario.descripcion.trim() || formulario.cantidad === '') {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (isNaN(formulario.cantidad) || Number(formulario.cantidad) < 0) {
      setError('Cantidad debe ser un número positivo.');
      return;
    }

    setError('');

    const nuevoProducto = {
      codigo: crypto.randomUUID(),
      nombre: formulario.nombre.trim(),
      descripcion: formulario.descripcion.trim(),
      cantidad: Number(formulario.cantidad),
      creacion: new Date().toISOString(),
    };

    crearProducto(nuevoProducto);
    toast.success('Producto agregado correctamente');

    setFormulario({ nombre: '', descripcion: '', cantidad: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mb-10 bg-white p-6 rounded shadow-md" noValidate>
      <h2 className="text-2xl font-bold text-black mb-4">Agregar Nuevo Producto</h2>

      {error && (
        <div role="alert" className="bg-red-100 text-red-700 p-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="nombre" className="block text-sm font-medium mb-1">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formulario.nombre}
          onChange={handleChange}
          aria-label="Nombre del producto"
          aria-invalid={!!error}
          aria-describedby={error ? 'form-error' : undefined}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus-visible:ring-indigo-500"
          placeholder="Nombre..."
        />
      </div>

      <div>
        <label htmlFor="descripcion" className="block text-sm font-medium mb-1">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formulario.descripcion}
          onChange={handleChange}
          aria-label="Descripción del producto"
          aria-invalid={!!error}
          aria-describedby={error ? 'form-error' : undefined}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus-visible:ring-indigo-500"
          placeholder="Descripción..."
        />
      </div>

      <div>
        <label htmlFor="cantidad" className="block text-sm font-medium mb-1">Cantidad</label>
        <input
          id="cantidad"
          name="cantidad"
          type="number"
          value={formulario.cantidad}
          onChange={handleChange}
          aria-label="Cantidad disponible"
          aria-invalid={!!error}
          aria-describedby={error ? 'form-error' : undefined}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus-visible:ring-indigo-500"
          placeholder="Cantidad..."
        />
      </div>

      <div className="text-right flex justify-center">
        <button
          type="submit"
          className="bg-black hover:bg-red-900 text-white py-2 px-6 rounded font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-900 cursor-pointer"
        >
          Agregar
        </button>
      </div>
    </form>
  );
}
