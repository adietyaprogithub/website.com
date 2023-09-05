import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Navbar.module.css";

export default function Navbara() {
  return (
    <div className={styles.container}>
      <BasicExample />
    </div>
  );
}

function BasicExample() {
  return (
    <Navbar expand="lg" className={styles.bgBodyTertiary}>
      <Container>
        <Navbar.Brand href="#home">Learning.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cource">Cource</Nav.Link>
            <Nav.Link href="#placement">Placements</Nav.Link>
            <Nav.Link href="#companies">Companies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
