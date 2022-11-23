const user_Login='user_Login';

const userLogin=function(userName, bool){
    return{
        type:user_Login,
        loginUser:userName, 
        isLogin:bool
    }
};


export {user_Login, userLogin}