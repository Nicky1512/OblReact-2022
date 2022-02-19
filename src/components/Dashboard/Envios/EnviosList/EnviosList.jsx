import "./EnviosList.css";
import { useSelector } from "react-redux";

import EnvioListItem from "./EnviosListItem/EnviosListItem";

const EnviosList = () => {
  const envios = useSelector((state) => state.envios);

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center">Pedidos</h1>
        {envios.length > 0 ? (
          <div>
            {envios.map((envio, index) => (
              <EnvioListItem {...envio} key={index} />
            ))}
          </div>
        ) : (
          <p className="text-center">No hay pedidos.</p>
        )}
      </div>
    </>
  );
};

export default EnviosList;
