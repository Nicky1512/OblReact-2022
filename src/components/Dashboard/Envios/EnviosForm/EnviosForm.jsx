import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormSelect } from "../EnviosForm/EnviosForm_Select";

const EnviosForm = () => {
  const categorias = useSelector((state) => state.categorias);
  const ciudades = useSelector((state) => state.ciudades);
  console.log("Ciudades Form", ciudades);

  const inputPeso = useRef();
  const slcOrigen = useRef();
  const slcDestino = useRef();
  const slcCategoria = useRef();

  const userLogged = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();

  const onClickAddEnvio = async (e) => {
    e.preventDefault();
    const peso = inputPeso.current.value;
    const origen = slcOrigen.current.value;
    const destino = slcDestino.current.value;
    const categoria = slcCategoria.current.value;

    if (peso == "" || origen == -1 || destino == -1 || categoria == -1) {
      alert("Debe completar todos los campos");
    } else {
      const envio = {
        idUsuario: userLogged.id,
        idCiudadOrigen: origen,
        idCiudadDestino: destino,
        peso: peso,
        distancia: 2.32,
        precio: 43.56,
        idCategoria: categoria,
      };
    }
  };

  const calcularDistancia = (origen, destino) => {};

  const calcularCosto = (peso, distancia) => {};

  return (
    <form>
      <fieldset>
        <legend>Nuevo Pedido</legend>
        <div class="mb-3">
          <label for="inputPeso" class="form-label">
            Peso
          </label>
          <input
            type="number"
            id="inputPeso"
            class="form-control"
            placeholder="kg"
          />
        </div>


        {ciudades.length > 0 ? (
          <FormSelect
            list={ciudades}
            slcID="slcOrigen"
            defaultOption="Seleccione un origen"
            txtLabel="Origen"
          />
        ) : (
          <div class="mb-3">Cargando...</div>
        )}

        {ciudades.length > 0 ? (
          <FormSelect
            list={ciudades}
            slcID="slcDestino"
            defaultOption="Seleccione un destino"
            txtLabel="Destino"
          />
        ) : (
          <div class="mb-3">Cargando...</div>
        )}

        {categorias.length > 0 ? (
          <FormSelect
            list={categorias}
            slcID="slcCategoria"
            defaultOption="Seleccione una categoria"
            txtLabel="Categoria"
          />
        ) : (
          <div class="mb-3">Cargando...</div>
        )}
        <button type="submit" class="btn btn-primary">
          Pedir
        </button>
      </fieldset>
    </form>
  );
};

export default EnviosForm;
