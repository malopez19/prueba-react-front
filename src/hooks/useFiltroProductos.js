import { useMemo } from 'react';

export function useFiltroProductos(productos, filtros) {
  const { nombre, orden } = filtros;

  const productosFiltrados = useMemo(() => {
    return productos
      .filter((p) =>
        nombre ? p.nombre.toLowerCase().includes(nombre.toLowerCase()) : true
      )
      .sort((a, b) => {
        if (!orden) return 0;
        if (orden === 'nombre') return a.nombre.localeCompare(b.nombre);
        if (orden === 'cantidad') return a.cantidad - b.cantidad;
        if (orden === 'creacion') return new Date(a.creacion) - new Date(b.creacion);
        if (orden === 'codigo') return a.codigo.localeCompare(b.codigo);
        return 0;
      });
  }, [productos, nombre, orden]);

  return productosFiltrados;
}
