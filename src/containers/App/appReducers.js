const initialState = {
    userLogged: null,
    envios: [], 

};

const appReducer = (state = initialState, action) => {
    const {type} = action;
    switch(type){
        default:
            return state;
    }
}

export default appReducer;