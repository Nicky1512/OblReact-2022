import {ON_USER_LOGGED, ON_LOAD_ENVIOS, ON_ADD_ENVIO} from './constants'


const initialState = {
    userLogged: null,
    envios: [], 

};

const appReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){

        case ON_USER_LOGGED:
            return{...state, userLogged: payload};
        case ON_LOAD_ENVIOS:
            return {...state, envios: payload};
        case ON_ADD_ENVIO:
             return {...state, envios: [...state.envios, payload]};
        default:
            return state;
    }
}

export default appReducer;