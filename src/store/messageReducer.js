

const initialState={

}

function messageReducer (state=initialState, action){
    switch(action.type){
        case "load_data":{
            let newState={...state};
            return newState;
        }

        default: return state;
    }
}

export default messageReducer;