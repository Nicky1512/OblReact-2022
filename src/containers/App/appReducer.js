import {
  ON_USER_LOGGED,
  ON_LOAD_ENVIOS,
  ON_ADD_ENVIO,
  GET_CATEGORIAS,
  GET_CIUDADES,
  GET_DEPTOS,
  ON_DELETE_ENVIO
} from "./constants";

const initialState = {
  userLogged: null,
  envios: [],
  categorias: [],
  ciudades: [],
  deptos: [],
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ON_USER_LOGGED:
      return { ...state, userLogged: payload };
    case ON_LOAD_ENVIOS:
      return { ...state, envios: payload };
    case ON_ADD_ENVIO:
      return { ...state, envios: [...state.envios, payload] };
    case GET_CATEGORIAS:
      return { ...state, categorias: payload };
    case GET_CIUDADES:
      return { ...state,  ciudades: payload };
    case GET_DEPTOS:
      return { ...state, deptos: payload };
      case ON_DELETE_ENVIO:
        const newEnviosList = state.envios.filter((envio) => envio.id !== payload.id);
       // console.log(newEnviosList);
        return { ...state, envios: newEnviosList };
    default:
      return state;
  }
};

export default appReducer;
