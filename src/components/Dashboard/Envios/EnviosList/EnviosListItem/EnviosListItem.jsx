import { useSelector, useDispatch } from "react-redux";
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
  const ciudades = useSelector((state) => state.ciudades);

  const dispatch = useDispatch();
  const onDelete = async () => {
    //console.log("borrar el envio", id);
    const envioAborrar = {
      idEnvio: id, 
      precio: precio
    };
    try {
      const response = await deleteEnvio(envioAborrar, userLogged);   
      if(response.codigo === 200){
        dispatch(onDeleteEnvio(envioAborrar));
      }
      
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {ciudades.length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Pedido</h5>
            <h6 className="card-subtitle mb-2 text-muted">#.{id}</h6>
            <p className="card-text">
              <i>Ciudad Origen:</i>{" "}
              {ciudades.find((ciudad) => ciudad.id === ciudad_origen).nombre}
              <br></br>
              <i>Ciudad Destino:</i>{" "}
              {ciudades.find((ciudad) => ciudad.id === ciudad_destino).nombre}
            </p>
            <p className="card-text">
              Distancia: <strong>{distancia}km</strong>
            </p>
            <p className="card-text">
              Costo: <strong>{precio}$</strong>
            </p>
            <button onClick={onDelete} className="eliminar_btn btn btn-danger">
              Eliminar
            </button>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default EnvioListItem;
