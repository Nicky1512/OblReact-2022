import {ON_USER_LOGGED, ON_LOAD_ENVIOS, ON_ADD_ENVIO} from './constants';

const onUserLogged = (data) => {
    return {
        type: ON_USER_LOGGED,
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


export {onUserLogged, onLoadEnvios, onAddEnvio};