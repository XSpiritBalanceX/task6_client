import React from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {userLogin} from '../store/explainForReducer';

const IntPageLinks=(props)=>{
    const navigate=useNavigate();

    const logOut=()=>{
      props.dispatch(userLogin('', false));
      navigate('/');
    }

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >My mail</Navbar.Brand>
            <Nav className='ml-auto' >
            {props.isLogin&&<Button variant='outline-light' onClick={()=>logOut()}>Log out</Button>}
            </Nav>
        </Container>
      </Navbar>
    )
}

const mapStateToProps=(state)=>{
  console.log(state.messages.isLogin)
  return {
    isLogin:state.messages.isLogin
  }
}

const PageLinks=connect(mapStateToProps)(IntPageLinks);

export default PageLinks;