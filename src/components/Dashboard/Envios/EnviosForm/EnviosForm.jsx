import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddEnvio } from "../../../../containers/App/actions";
import { addEnvio } from "../../../../services/serviceApi";
import { FormSelect } from "./EnviosForm_Select";
import { calcularDistancia } from "../../../Calculadora/CalculadorDistancia";
import { useState } from "react";

const EnviosForm = () => {
  const categorias = useSelector((state) => state.categorias);
  const ciudades = useSelector((state) => state.ciudades);

  const precioBase = 50;
  const inputPesoRef = useRef();
  const slcOrigenRef = useRef();
  const slcDestinoRef = useRef();
  const slcCategoriaRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const userLogged = useSelector((state) => state.userLogged);
  const dispatch = useDispatch();

  const onClickAddEnvio = async (e) => {
    // console.log("origen", slcOrigenRef.current.value, "destino" slcOrigenRef)
    // const test = ciudades.find(ciudad => ciudad.id === (parseInt(slcOrigenRef.current.value)))
    //  console.log(test)
    //console.log(calcularDistancia());

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
      //alert("Debe completar todos los campos.");
      setErrorMessage("Debe completar todos los campos");
    } else if (origen === destino) {
      // alert("El origen no puede ser el mismo que el destino.");
      setErrorMessage("El origen no puede ser el mismo que el destino.");
    } else {
      const distancia = calcularDistancia(
        parseInt(origen),
        parseInt(destino),
        ciudades
      );
      const precio = calcularCosto(distancia, peso);

      const envio = {
        distancia: distancia,
        idCategoria: categoria,
        idCiudadDestino: destino,
        idCiudadOrigen: origen,
        idUsuario: userLogged.id,
        peso: peso,
        precio: precio,
      };
      try {
        const response = await addEnvio(envio, userLogged);
        if (response.codigo === 200) {
          const newEnvio = {
            ciudad_destino: parseInt(destino),
            ciudad_origen: parseInt(origen),
            distancia: distancia,
            id: response.idEnvio,
            id_categoria: categoria,
            id_usuario: userLogged.id,
            peso: peso,
            precio: precio,
          };

          dispatch(onAddEnvio(newEnvio));
          setErrorMessage("");
          setSuccessMessage("Envío realizado con éxito.");
          setTimeout(() => {setSuccessMessage("");}, 2000)
          
        } else {
          setErrorMessage(response.mensaje);
        }
      } catch (error) {
         console.log(error.response);
        setErrorMessage("No se pudo completar la solicitud.");
       // alert(error.message);
      }
    }
  };

  const calcularCosto = (distancia, peso) => {
    return precioBase + 10 * peso + (Math.floor(distancia) / 100) * 50;
  };

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
      {errorMessage !== "" ? (
        <div className="alert alert-danger mt-2" role="alert">
          {" "}
          {errorMessage}{" "}
        </div>
      ) : successMessage !== "" ? ( 
        <div className="alert alert-success mt-2" role="alert">
          {" "}
          {successMessage}{" "}
        </div>
      ): <div></div>}

    </div>
  );
};


export default EnviosForm;
