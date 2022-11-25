import React, {useState} from 'react';
import {Button , Offcanvas } from 'react-bootstrap';
import 'animate.css';


const OneMessage=(props)=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
   
    return(
        <div className='animate__animated animate__fadeInDownBig' style={{border:'solid 3px #D3D3D3', width:'70%', 
            borderRadius:'5px', padding:'10px', fontSize:'13px', marginBottom:'2%', direction:'ltr'}}>
            <p>{props.nameSender}</p>
            <p>{props.topic}</p>
            <p>{props.created}</p>
           <Button variant="outline-dark" onClick={toggleShow}  style={{fontSize:'12px', }}>
        Show 
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={false} style={{backgroundColor:'#D3D3D3'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your letter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{marginTop:'10%', }}>
          <p >From whom: <span style={{fontWeight:'bold'}}>{props.nameSender}</span></p>
          <p>Topic: <span style={{fontWeight:'bold'}}>{props.topic}</span></p>
          <p>Date:<span style={{fontWeight:'bold'}}> {props.created}</span></p>
          <div >{props.message}</div>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
        
    )
}

export default OneMessage;