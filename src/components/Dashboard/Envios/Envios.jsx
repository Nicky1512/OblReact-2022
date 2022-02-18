import EnviosList from "./EnviosList";
import EnviosForm from "./EnviosForm";

const Envios = ({envios, categorias}) => {
  console.log("Envios en envios", envios);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="p-3 border bg-light">
            <EnviosForm categorias={categorias} />
          </div>
        </div>
        <div className="col-6">
          <div className="p-2 border bg-light">
            <EnviosList envios={envios}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envios;
