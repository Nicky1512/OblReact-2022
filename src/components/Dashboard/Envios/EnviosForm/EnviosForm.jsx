import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const EnviosForm = () => {
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


 
  const calcularDistancia = (origen, destino) =>{


  };

  const calcularCosto = (peso, distancia) =>{

    
  };



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
        <div class="mb-3">
          <label for="slcOrigen" className="form-label d-block">
            Origen
          </label>
          <select name="" id="slcOrigen" className="form-select">
            <option value="-1">Seleccione una ciudad</option>
            <option value="">Europa</option>
            <option value="">America</option>
            <option value="">Asia</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="slcDestino" className="form-label d-block">
            Destino
          </label>
          <select name="" id="slcDestino" className="form-select">
            <option value="-1">Seleccione una ciudad</option>
            <option value="">Europa</option>
            <option value="">America</option>
            <option value="">Asia</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="slcCategoria" className="form-label d-block">
            Categoria
          </label>
          <select name="" id="slcCategoria" className="form-select">
            <option value="-1">Seleccione una categoria</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>
        <div class="mb-3"></div>
        <button type="submit" class="btn btn-primary">
          Pedir
        </button>
      </fieldset>
    </form>
  );
};

export default EnviosForm;
