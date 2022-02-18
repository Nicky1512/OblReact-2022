import "./EnviosList.css";
import { useSelector } from "react-redux";

import EnvioListItem from "./EnviosListItem/EnviosListItem";
 
const EnviosList = () => {
  const envios = useSelector((state) => state.envios);
  console.log("Los envios en la list", envios)
  return (
    <>
      {envios.length > 0 ? (
        <div className="container-fluid">
          <h1 className="text-center">Pedidos</h1>
          <div>
            {envios.map((envio, index) => (
              <EnvioListItem {...envio} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <p>No hay pedidos.</p>
      )}
    </>
  )



}

export default EnviosList;

