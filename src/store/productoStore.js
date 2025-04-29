import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useProductoStore = create(
  persist(
    (set) => ({
      productos: [],
      crearProducto: (producto) =>
        set((state) => ({
          productos: [...state.productos, producto],
        })),
      eliminarProducto: (codigo) =>
        set((state) => ({
          productos: state.productos.filter((p) => p.codigo !== codigo),
        })),
    }),
    {
      name: 'productos-storage', // clave en localStorage
    }
  )
);
