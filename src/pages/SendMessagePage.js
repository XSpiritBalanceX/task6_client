import React from 'react';
import { useState, useEffect} from "react";
import {Form, Button, Container, Card, Modal, FloatingLabel, Spinner  } from 'react-bootstrap';
import OneMessage from '../components/OneMessage';
import {connect} from 'react-redux';
import {loadAllMessage} from '../store/explainForReducer';



const IntSendMessagePage=(props)=>{

    const [forWhom, setForWhom]=useState('');
    const [topic, setTopic]=useState('');
    const [message, setMessage]=useState('');
    const [show, setShow] = useState(false);
    const [modalInfo, setModal]=useState('');
    const handleClose = () => setShow(false);
    const [isLoad, setIsLoad]=useState(false);

    const {nameSender,dispatch }=props;

     useEffect(() => {
      const id = setInterval(() => {
        fetch('http://localhost:5000/api/message/getmes?name='+nameSender)
        .then(response=>response.json())
        .then(data=>dispatch(loadAllMessage(data)))
        setIsLoad(true);       
      }, 5000);
  
      return () => {
        clearInterval(id);
      };
      
    }, [dispatch, nameSender]); 
    
   
    const sendMessage=()=>{
      let sendM={};
      sendM.nameSender=props.nameSender;
      sendM.nameReceivers=forWhom;
      sendM.topic=topic;
      sendM.message=message;
      fetch('http://localhost:5000/api/users/sendMessage', {method:'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }, 
       body:JSON.stringify(sendM)})
       .then(res=>res.json())
       .then(data=>{setModal(data.message); setShow(true)})
       .catch(err=>console.log(err))
      setForWhom('');
      setTopic('');
      setMessage('');
    }

  return (
      <div >
        {isLoad?<div><div style={{display:'flex',height:'40%', flexDirection:'row',  margin:'2% 2% 0 0'}}>        
      <div style={{width:'40%'}}>
      <div style={{display:'flex', flexDirection:'column', height:window.innerHeight-120, overflowY:'auto', direction:'rtl'}}>
        {props.dataMessage.map(el=>{
            return <OneMessage key={el.id}
             nameSender={el.nameSender}
             topic={el.topic}
             message={el.message}
             created={el.createdAt}/>
        }).sort((a,b)=>b.key-a.key)}
      </div>
    </div>
      <div style={{marginLeft:'2%', marginTop:'-3%', width:'50%'}}>
           <Container className="d-flex justify-content-center align-items-center" style={{height:window.innerHeight-100}}>          
        <Card style={{width:600}} className='p-5 '>
          <h2 className="m-auto">New message</h2>
          <Form.Control className="mt-4"  defaultValue={props.nameSender} disabled={true} name='nameReg' />
          <Form className="d-flex flex-column">
           <Form.Control className="mt-2" type="text" list="receivers" placeholder={'For whom'} 
               value={forWhom} onChange={(event)=>setForWhom(event.target.value)}></Form.Control>
           <datalist id="receivers">
           { props.receiver.receiver? props.receiver.receiver.map((el, ind)=>{
              return <option key={ind}>{el}</option>
            }):null }
          </datalist>
            <Form.Control className="mt-2" placeholder={'Topic'}  name='nameReg'
              value={topic} onChange={(event)=>setTopic(event.target.value)} />
            <FloatingLabel controlId="floatingTextarea2" label="Your text here">
            <Form.Control className="mt-2"
               as="textarea"
               maxLength={250}
               placeholder="Leave a comment here"
                style={{ height: '100px' }}
                value={message} onChange={(event)=>setMessage(event.target.value)}/>
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
      </div></div>:
      <div style={{position:'absolute', top:'50%', left:'50%'}}><Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>}         
      </div>  
    )
}

const mapStateToProps=(state)=>{
  return {
    nameSender:state.messages.userLogin,
    dataMessage:state.messages.allMessage,
    receiver:state.messages.receivers
  }
}

const SendMessagePage=connect(mapStateToProps)(IntSendMessagePage);

export default SendMessagePage;