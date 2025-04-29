export function ProductoCard({ producto, onEliminar }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div>
        <h3 className="text-xl font-semibold text-black dark:text-indigo-400">{producto.nombre}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{producto.descripcion}</p>
      </div>

      <div className="mt-4">
        <p className="text-gray-800 dark:text-gray-200">
          <span className="font-semibold">Cantidad:</span> {producto.cantidad}
        </p>
      </div>

      <button
        onClick={() => onEliminar(producto.codigo)}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition cursor-pointer"
      >
        Eliminar
      </button>
    </div>
  );
}
