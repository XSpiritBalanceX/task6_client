import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import PageLinks from './pages/PageLinks';
import PageRouter from './pages/PageRouter';
import messageReducer from './store/messageReducer';


let combinereducer=combineReducers({
  messages:messageReducer
});
let store=createStore(combinereducer);


function App() {
  return (
    <BrowserRouter>
    <div>
      <Provider store={store}>
        <PageLinks/>
        <PageRouter />
      </Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
