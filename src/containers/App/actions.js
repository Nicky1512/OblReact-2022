import {ON_USER_LOGGED, ON_LOAD_ENVIOS, ON_ADD_ENVIO, ON_DELETE_ENVIO, GET_CATEGORIAS} from './constants';

const onUserLogged = (data) => {
    return {
        type: ON_USER_LOGGED,
        payload: data
    };
};

const getCategorias = (data) => {
    return {
        type: GET_CATEGORIAS,
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



export {onUserLogged, onLoadEnvios, onAddEnvio, onDeleteEnvio, getCategorias};