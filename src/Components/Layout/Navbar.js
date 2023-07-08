import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

export default function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Products</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
