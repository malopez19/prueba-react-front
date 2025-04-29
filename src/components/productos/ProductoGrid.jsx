import { ProductoCard } from './ProductoCard';

export function ProductoGrid({ productos, onEliminar }) {
  if (productos.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No hay productos para mostrar.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {productos.map((producto) => (
        <ProductoCard
          key={producto.codigo}
          producto={producto}
          onEliminar={() => onEliminar(producto.codigo)} // ✅ fix
        />
      ))}
    </div>
  );
}
