const EnvioListItem = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Pedido</h5>
          <h6 className="card-subtitle mb-2 text-muted">nro ####</h6>
          <p className="card-text">
            Ciudad Destino: ###### | Ciudad Origen: ######
          </p>
          <p className="card-text">Distancia: ######km</p>
          <p className="card-text">Costo: ######$</p>
          <a href="#" className="btn btn-danger">
            Eliminar
          </a>
        </div>
      </div>
    </>
  );
};

export default EnvioListItem;
