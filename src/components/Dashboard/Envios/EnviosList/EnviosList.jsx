import "./EnviosList.css";

import EnvioListItem from "./EnviosListItem/EnviosListItem";

const EnviosList = ({ envios }) => {
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center">Pedidos</h1>
        {envios.map((envio, index) => (
          <EnvioListItem {...envio} key={index} />
        ))}
      </div>
    </>
  );
};

export default EnviosList;
