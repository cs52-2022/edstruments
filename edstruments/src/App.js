import './App.css';
import ItemTable from './table';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import TableDemo from "./TableDemo";
import edstruments_logo from "./images/edstruments-logo.png";
import SimpleDialogDemo from "./SimpleDialogDemo";

function App() {
  return (

    <div className="App">
      {/* <Navbar className="navbar" bg="light" expand="lg"> */}
      <Navbar className="top-navbar" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <a href="https://edstruments.com/">
              <img class="edstruments-logo" src={edstruments_logo} href="#home"></img>
            </a>
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#resources">Resources</Nav.Link>
              <Nav.Link href="#budgets">Budgets</Nav.Link>
              <Nav.Link href="#transactions-pos">Transactions/POs</Nav.Link>
              <Nav.Link href="#assets">Assets</Nav.Link>
              <Nav.Link href="#personal">Personal</Nav.Link>
              <Nav.Link href="#schools">Schools</Nav.Link>
            </Nav>
            <div className="school-info">
              <p class="district">Metro City Unified School District</p>
              <p class="school">John F. Kennedy High School</p>
            </div>
            <div className="user-icon-circle">AJ</div>
            <div className="vertical-line"></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <TableDemo />
        
    </div>
  );
}

export default App;
