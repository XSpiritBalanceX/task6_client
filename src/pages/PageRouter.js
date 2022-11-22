import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {connect} from 'react-redux';
import MainPage from './MainPage';
import SendMessagePage from './SendMessagePage';
import AllMessagePage from './AllMessagePage';


const intPageRouter=()=>{
    return(
        <div>
            <Routes>
                <Route path='/' element={<MainPage />}/>
                <Route path='/sendMessage' element={<SendMessagePage />}/>
                <Route path='/showAllMessage' element={<AllMessagePage />}/>
            </Routes>
        </div>
    )
}

const mapStateToProps=(state)=>{
   return {}
}

const PageRouter=connect(mapStateToProps)(intPageRouter);

export default PageRouter;