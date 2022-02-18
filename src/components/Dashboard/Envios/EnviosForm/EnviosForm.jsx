import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddEnvio } from "../../../../containers/App/actions";
import { addEnvio } from "../../../../services/serviceApi";
import { FormSelect } from "./EnviosForm_Select";

const EnviosForm = () => {
  const categorias = useSelector((state) => state.categorias);
  const ciudades = useSelector((state) => state.ciudades);

  const inputPesoRef = useRef();
  const slcOrigenRef = useRef();
  const slcDestinoRef = useRef();
  const slcCategoriaRef = useRef();

  const userLogged = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();

  const onClickAddEnvio = async (e) => {
    console.log("El usuario logged", userLogged);

    e.preventDefault();
    const peso = inputPesoRef.current.value;
    const origen = slcOrigenRef.current.value;
    const destino = slcDestinoRef.current.value;
    const categoria = slcCategoriaRef.current.value;

    if (
      peso === "" ||
      origen === "-1" ||
      destino === "-1" ||
      categoria === "-1"
    ) {
      alert("Debe completar todos los campos");
    } else {
      const envio = {
        distancia: 2.32, //TODO: cambiar por distancia calculada
        idCategoria: categoria,
        idCiudadDestino: destino,
        idCiudadOrigen: origen,
        idUsuario: userLogged.id,
        peso: peso,
        precio: 43.56, //TODO: cambiar por costo calculado
      };
      console.log(envio);
      //TODO: Da error 401 cada vez
      try {
        const response = await addEnvio(envio, userLogged);
        dispatch(onAddEnvio(response));
      } catch (error) {
        // console.log(error.response);
        alert(error.message);
      }
    }
  };

  const calcularCosto = (peso, distancia) => {};

  return (
    <div>
      <h1 className="text-center">Nuevo</h1>
      <form>
        <fieldset>
          <legend>Nuevo Pedido</legend>
          <div className="mb-3">
            <label htmlFor="inputPeso" className="form-label">
              Peso
            </label>
            <input
              type="number"
              id="inputPeso"
              className="form-control"
              placeholder="kg"
              ref={inputPesoRef}
            />
          </div>

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

          {categorias.length > 0 ? (
            <FormSelect
              list={categorias}
              slcID="slcCategoria"
              defaultOption="Seleccione una categoria"
              txtLabel="Categoria"
              slcRef={slcCategoriaRef}
            />
          ) : (
            <div className="mb-3">Cargando...</div>
          )}
          <div className="text-center">
            <button
              onClick={onClickAddEnvio}
              type="submit"
              className="btn btn-dark btn-lg pr-5 pl-5"
            >
              Pedir
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default EnviosForm;
