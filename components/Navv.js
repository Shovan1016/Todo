import React,{useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useUser } from '@auth0/nextjs-auth0';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { emailData } from '../redux/emailSlice';


const Navv = () => {

  const { user, error, isLoading } = useUser();
    const dispatch=useDispatch();
    useEffect(()=>{
    dispatch(emailData(user.email))
    },[])
    
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    
   

  return (
    <>
    <Navbar  bg="primary" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand><div className="brand-name d-flex h4">To do Application</div></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <NavDropdown  title={user.name} id="basic-nav-dropdown" className='ms-5 text-dark' variant="success" >
              <NavDropdown.Item href="/api/auth/logout" className="text-dark">Log out</NavDropdown.Item> 
          </NavDropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <style jsx>{`

    .brand-name{
        display:inline;
        align-items:center;
    }
    

    `}</style>
    </>
  )
}



export default Navv