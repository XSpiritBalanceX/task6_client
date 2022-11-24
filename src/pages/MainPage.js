import React from 'react';
import {Form, Button, Container, Card, Modal} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useState, useEffect} from "react";
import {connect} from 'react-redux';
import {userLogin} from '../store/explainForReducer';

const IntMainPage=(props)=>{

    const navigate=useNavigate();
    const [nameInput, setNameInput]=useState('');
    const [show, setShow] = useState(false);
    const [modalInfo, setModal]=useState('');
    const handleClose = () => setShow(false);
  
    const click=()=>{
      if(nameInput===''){
        setModal('Your name cannot be an empty string!');
        setShow(true);
      }else{
        props.dispatch(userLogin(nameInput, true))
        navigate('/sendMessage');
      }
    }
   

    return (
        <div> 
            <Container className="d-flex justify-content-center align-items-center" style={{height:window.innerHeight-54}}>          
          <Card style={{width:600}} className='p-5'>
            <h2 className="m-auto">Login</h2>
            <Form className="d-flex flex-column">
              <Form.Control className="mt-3" placeholder={'Enter your name'}  name='nameReg' 
                 value={nameInput}  onChange={(event)=>setNameInput(event.target.value)}/>
            <div className=" d-flex  justify-content-end mt-3 pl-3 pr-3">
              <Button  variant="outline-dark" onClick={click}>Go!</Button>
            </div>              
          </Form>
          </Card>
          </Container>

          <Modal show={show} onHide={handleClose}>
        <Modal.Body>{modalInfo}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

const mapStateToProps=(state)=>{
  return { }
}

const MainPage=connect(mapStateToProps)(IntMainPage);

export default MainPage;