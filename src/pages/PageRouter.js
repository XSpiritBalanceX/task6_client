import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {connect} from 'react-redux';
import MainPage from './MainPage';
import SendMessagePage from './SendMessagePage';


const IntPageRouter=(props)=>{
    return(
        <div>
            <Routes>
                <Route path='/' element={<MainPage />}/>
                {props.isLogin&&<Route path='/sendMessage' element={<SendMessagePage />}/>}
                <Route path="*" element={<Navigate to ={'/'}/>}/>
            </Routes>
        </div>
    )
}

const mapStateToProps=(state)=>{
   return {
    isLogin:state.messages.isLogin
   }
}

const PageRouter=connect(mapStateToProps)(IntPageRouter);

export default PageRouter;