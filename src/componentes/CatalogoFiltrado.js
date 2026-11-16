import React, { useState } from 'react';

function CatalogoProductos() {
  const [productos, setProductos] = useState([]);
  const [filtrar, setfiltrar] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const obtenerProductos = async () => {
    setCargando(true);
    setError(null);
    try {
      const respuesta = await fetch('https://fakestoreapi.com/products');
      if (!respuesta.ok) throw new Error('No se pudo conectar con la tienda');
      const datos = await respuesta.json();
      
      setProductos(datos);
      setfiltrar(datos); 
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  const filtrarCategoria = (categoria) => {
    if (categoria === 'todos') {
      setfiltrar(productos);
    } else {
      const resultado = productos.filter(p => p.category === categoria);
      setfiltrar(resultado);
    }
  };

  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark">Catálogo de utilidades y más</h1>
        <p className="lead text-muted">Variedad en productos diarios, de tecnología y regalos</p>
        
        <button className="btn btn-primary btn-lg shadow" onClick={obtenerProductos}>
          Abrir Catálogo de Productos
        </button>
      </header>

      {productos.length > 0 && (
        <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
          <button onClick={() => filtrarCategoria('todos')} className="btn btn-outline-dark">Todos</button>
          <button onClick={() => filtrarCategoria("electronics")} className="btn btn-outline-secondary">Electrónicos</button>
          <button onClick={() => filtrarCategoria("men's clothing")} className="btn btn-outline-secondary">Ropa Hombre</button>
          <button onClick={() => filtrarCategoria("jewelery")} className="btn btn-outline-secondary">Joyería</button>
        </div>
      )}

      {cargando && <div className="text-center h4 text-primary">Cargando artículos...</div>}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      <div className="row g-4">
        {filtrar.map(item => (
          <div className="col-12 col-md-6 col-lg-3" key={item.id}>
            <div className="card h-100 shadow-sm border-0">
              <div className="p-3" style={{ height: '200px' }}>
                <img 
                  src={item.image} 
                  className="card-img-top h-100 w-100" 
                  style={{ objectFit: 'contain' }} 
                  alt={item.title} 
                />
              </div>
              <div className="card-body d-flex flex-column">
                <span className="badge bg-light text-dark mb-2 align-self-start border">
                  {item.category}
                </span>
                <h5 className="card-title h6 text-truncate fw-bold">{item.title}</h5>
                <p className="card-text text-success fw-bold">${item.price}</p>
                <button className="btn btn-dark w-100 mt-auto">Ver Detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogoProductos;