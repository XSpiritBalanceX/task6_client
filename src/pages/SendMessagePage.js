import React from 'react';
import { useState} from "react";
import {Form, Button, Container, Card, Modal, FloatingLabel } from 'react-bootstrap';

const SendMessagePage=()=>{

    const [forWhom, setForWhom]=useState('');
    const [show, setShow] = useState(false);
    const [modalInfo, setModal]=useState('');
    const handleClose = () => setShow(false);
   
    const sendMessage=()=>{

    }

    return (
        <div>
             <Container className="d-flex justify-content-center align-items-center" style={{height:window.innerHeight-54}}>          
          <Card style={{width:600}} className='p-5'>
            <h2 className="m-auto">New message</h2>
            <Form className="d-flex flex-column">
             <Form.Control className="mt-4" type="text" list="country" placeholder={'For whom'} 
                 value={forWhom} onChange={(event)=>setForWhom(event.target.value)}></Form.Control>
             <datalist id="country">
	           <option>Беларусь</option>
	            <option>Бельгия</option>
	            <option>Болгария</option>
            </datalist>
              <Form.Control className="mt-2" placeholder={'Topic'}  name='nameReg' />
              <FloatingLabel controlId="floatingTextarea2" label="Your text here">
              <Form.Control className="mt-2"
                 as="textarea"
                 placeholder="Leave a comment here"
                  style={{ height: '100px' }}/>
               </FloatingLabel>
            <div className=" d-flex  justify-content-end mt-3 pl-3 pr-3">
              <Button  variant="outline-dark" onClick={()=>sendMessage()}>Send</Button>
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

export default SendMessagePage;