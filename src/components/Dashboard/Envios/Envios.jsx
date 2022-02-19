import EnviosList from "./EnviosList";
import EnviosForm from "./EnviosForm";
import Gastos from "../Gastos/Gastos";

const Envios = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="p-3 border bg-light">
            <EnviosForm />
          </div>
          <div className="p-3 border bg-light mt-3">
            <Gastos />
          </div>
        </div>
        <div className="col-6">
          <div className="p-2 border bg-light">
            <EnviosList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envios;
