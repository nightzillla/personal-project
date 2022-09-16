
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Photos from './Photos'
import {Rount, Link, Router} from 'react-router-dom';
import {
    BrowserRouter as Route,
    Switch,
    Route,
    Link
} from "react-router-dom";

<Link to="/Dashboard"> Dashboard </Link>

//bg="opacity-10"
function BasicExample() {
  return ( 
    <Router> 
    <Navbar class="navBar" bg="light" expand="lg">  
      <Container id="navbar">
       <Navbar fixed="bottom"/>
        <Navbar.Brand>choose your desintation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/Photos"}>Photos</NavDropdown.Item>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Switch>
      <Route path="/Photos">
      </Route>
      </Switch>
    </div>
    </Router>
  );
}
{<Router exact path="/" componets={Photos} />}


export default BasicExample;
