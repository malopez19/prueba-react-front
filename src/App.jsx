import { useState } from 'react';
import Layout from './components/layout/Layout';
import { FormularioProducto } from './components/productos/FormularioProducto';
import { ListaProductos } from './components/productos/ListaProductos';
import {Sidebar} from './components/layout/Sidebar';

function App() {
  const [filtros, setFiltros] = useState({ nombre: '', orden: '' });

  return (
    <Layout
      sidebar={
        <Sidebar
          onFilterChange={(nuevosFiltros) => setFiltros(nuevosFiltros)}
          onReset={() => setFiltros({ nombre: '', orden: '' })}
        />
      }
    >
      <div className="flex items-center mb-6 justify-center">
        <h1 className="text-3xl font-bold text-black">
          Gestión de Productos
        </h1>
      </div>

      <FormularioProducto />
      <ListaProductos filtros={filtros} />
    </Layout>
  );
}

export default App;
