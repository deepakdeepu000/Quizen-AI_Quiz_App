import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigation } from '@react-navigation/native'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./navbar.css"

function NavScrollExample() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };



  return (
    <Navbar expand="lg" className=" bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Quizen AI</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown 
                  title="Link" 
                  id="navbarScrollingDropdown"
                  show={showDropdown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  >
              <NavDropdown.Item  onClick={() => navigate('/TextGeneration')}>Self Test</NavDropdown.Item>
              <NavDropdown.Item  onClick={() => navigate('/Upload')}>
              Resume Skill Test
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Join Quiz
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex" >
             <Button variant="outline-success" style={{padding : '10px', width: '65%', height: '35%' ,marginTop: '25px' }}  onClick={() => navigate('/Login')} >Log In</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
