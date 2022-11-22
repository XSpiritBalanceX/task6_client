import React from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const PageLinks=()=>{
    const navigate=useNavigate();

    const goToPageSend=()=>{
        navigate('/sendMessage');
    };
    const goToPageAllMessage=()=>{
        navigate('/showAllMessage');
    };
    const logOut=()=>{
        navigate('/');
    }

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >My mail</Navbar.Brand>
            <Nav className='ml-auto' >
            <Button variant='outline-light' onClick={()=>goToPageSend()}>Send your message</Button>
            <Button variant='outline-light' onClick={()=>goToPageAllMessage()}>All your message</Button> 
            </Nav>
            <Nav className='ml-auto' >
            <Button variant='outline-light' onClick={()=>logOut()}>Log out</Button>  
            </Nav>
        </Container>
      </Navbar>
    )
}

export default PageLinks;