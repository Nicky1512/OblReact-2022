import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FormSelect } from "../Envios/EnviosForm/EnviosForm_Select";
import { calcularDistancia } from "../../Calculadora/CalculadorDistancia";
import Header from "../../Header/Header";

const Calculadora = () => {
  const ciudades = useSelector((state) => state.ciudades);
  const slcOrigenRef = useRef();
  const slcDestinoRef = useRef();

  const [distancia, setDistancia] = useState(0);

  const calcular = (e) => {
    e.preventDefault();
    const origen = parseInt(slcOrigenRef.current.value);
    const destino = parseInt(slcDestinoRef.current.value);
    if (origen !== -1 && destino !== -1) {
      setDistancia(calcularDistancia(origen, destino, ciudades));
    } else {
      alert("Debe seleccionar un destino y un origen");
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <h1 className="text-center">Calculadora</h1>
        <div className="p-5 border bg-light text-center">
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
                <button
                  onClick={calcular}
                  type="submit"
                  className="btn btn-dark btn-lg mt-3 pr-5 pl-5"
                >
                  Calcular
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="mt-3">
          <p className="border p-3 alert alert-primary">
            RESULTADO: <strong>{distancia} km</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Calculadora;
