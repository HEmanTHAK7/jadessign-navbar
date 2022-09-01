import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Button,Form,Container} from 'react-bootstrap'
import './navb.css'
import logo from './Home/paint.jpg'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Products from './Products/Products';


export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar bg="dark" variant='dark' expand="lg" fixed='top'  className='navbar'>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} width='40px' height='40px'/> 
          Jadesign
          </Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 " id='Nav1'
            style={{ Height: '0px' }}
            // navbarScroll
          >
            <Nav.Link as={Link} to={"/home"} className="navContent">Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"} className="navContent">About</Nav.Link>
            <Nav.Link as={Link} to={"/contact"} className="navContent">Contact</Nav.Link>
            <Nav.Link as={Link} to={"/products"} className="navContent">Product</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown" className="navContent">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#"  className="navContent">
              Link
            </Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
        {/* for content done another div here  */}
      <div>
      <Routes>
          <Route path="/home" element={<Home />}/>
            
          
          <Route path="/about" element={<About/>}/>
            
          
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products" element={<Products/>}/>
            
          
          <Route path="/" element={<Home />}/>
           
          
        </Routes>
      </div>
      </Router>
    )
  }
}
