import {user_Login, load_AllMessage} from './explainForReducer';

const initialState={
   userLogin:'',
   isLogin:false,
   allMessage:[],
   receivers:[]
}

function messageReducer (state=initialState, action){
    switch (action.type){
        case user_Login:{
            let newState={...state};
            newState.userLogin=action.loginUser;
            newState.isLogin=action.isLogin;
            fetch('http://localhost:5000/api/message/?name='+newState.userLogin)
            .then(response=>response.json())
            .then(data=>newState.receivers=data);
            return newState;
        }

        case load_AllMessage:{
           let newState={...state}; 
            newState.allMessage=action.data.message; 
            let uniqArrReceiv=newState.receivers.receiver.filter((el, ind, arr)=>{
                return arr.indexOf(el)===ind
            });
            newState.receivers.receiver=uniqArrReceiv;    
            return newState;
        }

        default: return state;
    }
}

export default messageReducer;