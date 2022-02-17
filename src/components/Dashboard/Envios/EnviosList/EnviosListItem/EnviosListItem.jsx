const EnvioListItem = ({id, ciudad_origen, ciudad_destino, distancia, precio }) => {
  return (
    <>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Pedido</h5>
          <h6 className="card-subtitle mb-2 text-muted">#.{id}</h6>
          <p className="card-text">
            Ciudad Origen: {ciudad_origen} | Ciudad Destino : {ciudad_destino}
          </p>
          <p className="card-text">Distancia: {distancia}km</p>
          <p className="card-text">Costo: {precio}$</p>
          <a href="#" className="eliminar_btn btn btn-danger">
            Eliminar
          </a>
        </div>
      </div>
    </>
  );
};

export default EnvioListItem;
