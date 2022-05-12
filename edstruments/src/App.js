import './App.css';
import ItemTable from './table';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '@fontsource/roboto/300.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Edstruments</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#resources">Resources</Nav.Link>
              <Nav.Link href="#budgets">Budgets</Nav.Link>
              <Nav.Link href="#transactions/pos">Transactions/POs</Nav.Link>
              <Nav.Link href="#personnel">Personnel</Nav.Link>
              <Nav.Link href="#schools">Schools/POs</Nav.Link>
              <Nav.Link href="#assets">Assets</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <h1>Please fill out the form to log your item!</h1>
      <ItemTable />    
    </div>
  );
}

export default App;
