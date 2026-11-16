import CatalogoProducto from './componentes/CatalogoFiltrado';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Proyecto de Sistema de Gestión de Inventario</span>
        </div>
      </nav>

      <CatalogoProducto />

      <footer className="bg-light text-center py-4 mt-5 border-top">
        <p className="text-muted mb-0">Sistema de Gestión de Inventario</p>
      </footer>
    </div>
  );
}

export default App;