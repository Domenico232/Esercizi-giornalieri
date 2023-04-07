import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Research from './Research';

function Navbarre() {
  return (
    <Navbar bg="black"  expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand  href="#home"><img className='Logo' src="data:image/png;base64,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" alt="logo"></img><h3 className="text-white">Have a bad day</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link className="text-white"  href="#home">Home</Nav.Link>
            <Nav.Link className="text-white" href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Research></Research>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Navbarre;