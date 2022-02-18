import { useRef } from "react";
import { useSelector } from "react-redux";

import { FormSelect } from "../Envios/EnviosForm/EnviosForm_Select";

const Calculadora = () => {
  const ciudades = useSelector((state) => state.ciudades);

  const slcOrigenRef = useRef();
  const slcDestinoRef = useRef();

  const origen = slcOrigenRef.current.value;
  const destino = slcDestinoRef.current.value;

  const calcularDistancia = (origen, destino) => {};

  return (
    <div className="">
      <h1>Calculadora</h1>
      <div className="p-5 border bg-light">
        <form>
          <fieldset>
            <legend>Calcular distancia</legend>
            {ciudades.length > 0 ? (
              <FormSelect
                list={ciudades}
                slcID="slcOrigen"
                defaultOption="Seleccione un origen"
                txtLabel="Origen"
                slcRef={slcOrigenRef}
              />
            ) : (
              <div className="mb-3">Cargando...</div>
            )}

            {ciudades.length > 0 ? (
              <FormSelect
                list={ciudades}
                slcID="slcDestino"
                defaultOption="Seleccione un destino"
                txtLabel="Destino"
                slcRef={slcDestinoRef}
              />
            ) : (
              <div className="mb-3">Cargando...</div>
            )}
            <div className="mb-3"></div>
            <div className="text-center">
              <button type="submit" className="btn btn-dark btn-lg pr-5 pl-5">
                Pedir
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="mt-3">
        <p className="border p-2">RESULTADO</p>
      </div>
    </div>
  );
};

export default Calculadora;
