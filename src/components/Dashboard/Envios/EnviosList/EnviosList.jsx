import "./EnviosList.css";

import EnvioListItem from "./EnviosListItem/EnviosListItem";

const EnviosList = () => {
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center">Pedidos</h1>
        <EnvioListItem />
        <EnvioListItem />
        <EnvioListItem />
        <EnvioListItem />
      </div>
    </>
  );
};

export default EnviosList;
