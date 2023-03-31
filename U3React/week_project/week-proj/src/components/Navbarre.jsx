import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarre() {
   
  return (
    <Navbar expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home"> <img src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="loggo" className='logonet' /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">TV Shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently added</Nav.Link>
            <Nav.Link href="#link">My list</Nav.Link>
          </Nav>
          <div> <img src="https://www.clipartmax.com/png/small/58-589213_user-profile-avatar-scalable-vector-graphics-icon-profile-girl-avatar.png" alt="User Profile Avatar" className='avatar' ></img> <input className='bg-dark text-white' type="search" name="" id=""/> </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarre;
