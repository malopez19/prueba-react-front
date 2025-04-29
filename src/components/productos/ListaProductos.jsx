import { useProductoStore } from '../../store/productoStore';
import { useFiltroProductos } from '../../hooks/useFiltroProductos';
import { ProductoGrid } from './ProductoGrid';
import { toast } from 'react-hot-toast';

export function ListaProductos({ filtros }) {
  const productos = useProductoStore((state) => state.productos);
  const eliminarProducto = useProductoStore((state) => state.eliminarProducto);

  const productosFiltrados = useFiltroProductos(productos, filtros);

  const handleEliminar = (codigo) => {
    eliminarProducto(codigo);
    toast.success('Producto eliminado correctamente');
  };

  return (
    <div className="mt-10">
      <ProductoGrid productos={productosFiltrados} onEliminar={handleEliminar} />
    </div>
  );
}
