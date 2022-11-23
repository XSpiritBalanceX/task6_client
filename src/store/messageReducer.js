import {user_Login} from './explainForReducer';

const initialState={
   userLogin:'',
   isLogin:false
}

function messageReducer (state=initialState, action){
    switch (action.type){
        case user_Login:{
            let newState={...state};
            newState.userLogin=action.loginUser;
            newState.isLogin=action.isLogin;
            return newState;
        }

        default: return state;
    }
}

export default messageReducer;