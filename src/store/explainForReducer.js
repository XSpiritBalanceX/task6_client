const user_Login='user_Login';
const load_AllMessage='load_AllMessage';

const userLogin=function(userName, bool){
    return{
        type:user_Login,
        loginUser:userName, 
        isLogin:bool
    }
};

const loadAllMessage=function(message){
    return{
        type:load_AllMessage,
        data:message
    }
}




export {user_Login, userLogin,
    load_AllMessage, loadAllMessage}