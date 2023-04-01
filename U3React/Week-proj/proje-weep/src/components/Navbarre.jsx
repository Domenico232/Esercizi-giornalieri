import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchbarre from './Searchbarre';


class Navbarre extends Component{
    render(){
        return (
            (
                <Navbar  expand="lg" variant="dark">
                  <Container>
                    <Navbar.Brand href="#home"><img src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="logo" className="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">TV Shows</Nav.Link>
                        <Nav.Link href="#link">Movies</Nav.Link>
                        <Nav.Link href="#link">Recently added</Nav.Link>
                        <Nav.Link href="#link">My list</Nav.Link>
                       
                      </Nav>
                      <img src="https://static.vecteezy.com/system/resources/previews/000/420/855/non_2x/avatar-icon-vector-illustration.jpg" alt="avat" className="avatar"/>
                      <Searchbarre/>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              )
        )
    }
}
export default Navbarre