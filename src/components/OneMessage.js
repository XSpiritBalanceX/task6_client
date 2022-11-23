import React, {useState} from 'react';
import {Button , Offcanvas } from 'react-bootstrap';


const OneMessage=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
   
    return(
        <div style={{border:'solid 1.5px #D3D3D3', width:'60%', borderRadius:'5px', padding:'10px'}}>
            <p>Name</p>
            <p>Text some message</p>
            <p>Date message</p>
           <Button variant="primary" onClick={toggleShow} className="me-2">
        Show 
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        </div>
        
    )
}

export default OneMessage;