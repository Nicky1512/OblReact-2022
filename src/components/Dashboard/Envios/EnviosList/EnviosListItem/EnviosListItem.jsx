import { useSelector } from "react-redux";
import { onDeleteEnvio } from "../../../../../containers/App/actions";
import { deleteEnvio } from "../../../../../services/serviceApi";

const EnvioListItem = ({
  id,
  ciudad_origen,
  ciudad_destino,
  distancia,
  precio,
}) => {
  const userLogged = useSelector((state) => state.userLogged);

  const onDelete = async () => {
    console.log("borrar el envio", id);
    // try {
    //   await deleteEnvio(id, userLogged)
    //   dispatch(onDeleteEnvio(id))
    // } catch (error) {
    //   alert(error.message)
    // }
  };

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
          <button onClick={onDelete} className="eliminar_btn btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default EnvioListItem;
