import {ON_USER_LOGGED, ON_LOAD_ENVIOS, ON_ADD_ENVIO, ON_DELETE_ENVIO, GET_CATEGORIAS, GET_DEPTOS, GET_CIUDADES, ON_USER_LOGOUT} from './constants';

const onUserLogout = () => {
    return {
        type: ON_USER_LOGOUT
    };
};

const onUserLogged = (data) => {
    return {
        type: ON_USER_LOGGED,
        payload: data
    };
};

const onGetCategorias = (data) => {
    return {
        type: GET_CATEGORIAS,
        payload: data
    };
};

const onGetCiudades = (data) => {
    return {
        type: GET_CIUDADES,
        payload: data
    };
};

const onGetDeptos = (data) => {
    return {
        type: GET_DEPTOS,
        payload: data
    };
};

const onLoadEnvios = (envios) =>{
    return{
        type:ON_LOAD_ENVIOS,
        payload: envios
    };
};

const onAddEnvio = (newEnvio) =>{
    return{
        type: ON_ADD_ENVIO,
        payload: newEnvio
    };
};

const onDeleteEnvio = (id) => {
    return {
      type: ON_DELETE_ENVIO,
      payload: {
        id: id,
      },
    };
  };



export {onUserLogged, onLoadEnvios, onAddEnvio, onDeleteEnvio, onGetCategorias, onGetCiudades, onGetDeptos};